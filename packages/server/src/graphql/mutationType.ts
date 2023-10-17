import { GraphQLObjectType, GraphQLString } from "graphql";

import * as productMutations from "../modules/product/mutations";

export const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...productMutations,
  },
});
