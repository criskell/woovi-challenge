import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    priceInCents: { type: GraphQLInt },
  },
});
