import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { ProductModel } from "../productModel";
import { ProductType } from "../productType";

export const createProduct = mutationWithClientMutationId({
  name: "createProduct",
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    priceInCents: { type: new GraphQLNonNull(GraphQLInt) },
  },
  mutateAndGetPayload: async (input) => {
    const newProduct = new ProductModel(input);

    await newProduct.save();

    return newProduct.toObject();
  },
  outputFields: {
    product: {
      type: ProductType,
      resolve: ({ _id, ...product }) => ({
        id: _id,
        ...product,
      }),
    },
  },
});
