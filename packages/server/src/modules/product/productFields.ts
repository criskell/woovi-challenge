import { GraphQLNonNull } from "graphql";
import { connectionArgs } from "graphql-relay";

import { ProductConnection } from "./productType";
import ProductLoader from "./productLoader";

export const productConnectionField = {
  products: {
    type: new GraphQLNonNull(ProductConnection.connectionType),
    args: connectionArgs,
    resolve: (_: unknown, args: unknown, context: unknown) =>
      ProductLoader.loadAll(context, args),
  },
};
