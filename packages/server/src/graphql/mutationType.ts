import { GraphQLObjectType, GraphQLString } from "graphql";

export const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addHello: {
      type: GraphQLString,
      resolve() {
        return "Hello, world!";
      },
    },
  },
});
