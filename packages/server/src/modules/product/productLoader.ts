import { createLoader } from "@entria/graphql-mongo-helpers";

import { registerLoader } from "../../graphql/loaderRegistry";
import { ProductModel } from "./productModel";

const ProductLoader = createLoader({
  model: ProductModel,
  loaderName: "ProductLoader",
});

export default ProductLoader;

registerLoader("ProductLoader", ProductLoader.getLoader);
