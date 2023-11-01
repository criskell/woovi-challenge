import { DataLoaders, getAllDataLoaders } from "./loaderRegistry";

export type GraphQlContext = {
  dataloaders: DataLoaders;
};

export const createContext = (): GraphQlContext => {
  return {
    dataloaders: getAllDataLoaders(),
  };
};
