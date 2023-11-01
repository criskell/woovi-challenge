import { GraphQLObjectType, GraphQLString } from "graphql";
import { nodeField, nodesField } from "./typeRegistry";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello, world!";
      },
    },
  }),
});
