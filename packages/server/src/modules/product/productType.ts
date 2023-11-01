import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { globalIdField } from "graphql-relay";

import { nodeInterface, registerTypeLoader } from "../../graphql/typeRegistry";
import ProductLoader from "./productLoader";

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: globalIdField("Product"),
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    priceInCents: { type: GraphQLInt },
  },
  interfaces: [nodeInterface],
});

registerTypeLoader(ProductType, ProductLoader.load);
