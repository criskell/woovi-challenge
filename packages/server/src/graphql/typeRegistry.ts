import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { GraphQLObjectType } from "graphql";

import { GraphQlContext } from "./context";
import console from "console";

type TypeLoader = (context: GraphQlContext, id: string) => any;

type TypeLoaders = {
  [name: string]: {
    type: GraphQLObjectType;
    load: TypeLoader;
  };
};

const typeLoaders: TypeLoaders = {};

export const { nodeInterface, nodeField, nodesField } = nodeDefinitions(
  (globalId, context: GraphQlContext) => {
    const { type, id } = fromGlobalId(globalId);

    const { load } = typeLoaders[type];

    if (!load) {
      return null;
    }

    return load(context, id);
  },
  (node) => {
    const name = node?.constructor?.name;

    if (!name) return undefined;

    const { type } = typeLoaders[name];

    if (!type) return undefined;

    return type.name;
  }
);

export const registerTypeLoader = (
  type: GraphQLObjectType,
  load: TypeLoader
): void => {
  typeLoaders[type.name] = {
    type,
    load,
  };
};
