import { GraphQLObjectType, GraphQLString } from "graphql";

export const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve() {
        return "Hello, world!";
      },
    },
  },
});
