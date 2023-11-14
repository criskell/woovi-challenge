import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import { ProductModel } from "../productModel";
import { ProductConnection } from "../productType";
import ProductLoader from "../productLoader";

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

    return {
      id: newProduct._id,
    };
  },
  outputFields: {
    productEdge: {
      type: ProductConnection.edgeType,
      resolve: async ({ id }, _, ctx) => {
        const product = await ProductLoader.load(ctx, id);

        if (!product) {
          return null;
        }

        return {
          cursor: toGlobalId("Product", product._id),
          node: product,
        };
      },
    },
  },
  extensions: {},
});
