import { GraphQLNonNull } from "graphql";
import { connectionArgs } from "graphql-relay";

import { ProductConnection } from "./productType";
import ProductLoader from "./productLoader";

export const productConnectionField = {
  products: {
    type: new GraphQLNonNull(ProductConnection.connectionType),
    args: { ...connectionArgs },
    resolve: (_, args, context) => ProductLoader.loadAll(context, args),
  },
};
