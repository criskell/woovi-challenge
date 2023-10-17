import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { ProductModel } from "../productModel";
import { ProductType } from "../productType";

export const updateProduct = mutationWithClientMutationId({
  name: "updateProduct",
  inputFields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    priceInCents: {
      type: GraphQLInt,
    },
  },
  mutateAndGetPayload: (input) =>
    ProductModel.findOneAndUpdate({ _id: input.id }, input, {
      returnDocument: "after",
    }),
  outputFields: {
    product: {
      type: ProductType,
      resolve: (product) => Object.assign(product, { id: product._id }),
    },
  },
});
