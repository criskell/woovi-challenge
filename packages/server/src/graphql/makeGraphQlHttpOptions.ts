import { Options } from "koa-graphql";

import { schema } from "./schema";

export const makeGraphQlHttpOptions = (): Options => ({
  schema,
  pretty: true,
  graphiql: true,
});
