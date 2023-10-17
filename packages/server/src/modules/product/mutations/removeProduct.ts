import { GraphQLID, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { ProductModel } from "../productModel";
import { ProductType } from "../productType";

export const removeProduct = mutationWithClientMutationId({
  name: "removeProduct",
  inputFields: {
    productId: { type: new GraphQLNonNull(GraphQLID) },
  },
  mutateAndGetPayload: ({ productId }) =>
    ProductModel.findByIdAndDelete(productId),
  outputFields: {
    product: {
      type: ProductType,
      resolve: (product) => Object.assign(product, { id: product._id }),
    },
  },
});
