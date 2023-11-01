export type DataLoaders = {
  ProductLoader?: ReturnType<
    typeof import("../modules/product/productLoader").getLoader
  >;
};

export type DataLoaderGetters = {
  [Name in keyof DataLoaders]: () => DataLoaders[Name];
};

const loaders: DataLoaderGetters = {};

export const registerLoader = <K extends keyof DataLoaders>(
  key: K,
  getLoader: (typeof loaders)[K]
): void => {
  loaders[key] = getLoader;
};

export const getAllDataLoaders = (): DataLoaders =>
  Object.fromEntries(
    Object.entries(loaders).map(([name, getLoader]) => [name, getLoader()])
  );
