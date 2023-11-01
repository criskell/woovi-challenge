import { GraphQLObjectType, GraphQLString } from "graphql";

import { nodeField, nodesField } from "./typeRegistry";
import { productConnectionField } from "../modules/product/productFields";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    ...productConnectionField,
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello, world!";
      },
    },
  }),
});
