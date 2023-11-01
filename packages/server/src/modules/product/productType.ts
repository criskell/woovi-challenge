import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";

import { nodeInterface, registerTypeLoader } from "../../graphql/typeRegistry";
import ProductLoader from "./productLoader";

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: globalIdField("Product"),
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    priceInCents: { type: new GraphQLNonNull(GraphQLString) },
  },
  interfaces: [nodeInterface],
});

registerTypeLoader(ProductType, ProductLoader.load);
