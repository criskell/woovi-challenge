import { Options } from "koa-graphql";

import { schema } from "./schema";

export const makeGraphQlHttpOptions = (): Options => ({
  schema,
  pretty: true,
  graphiql: true,
  customFormatErrorFn: (error) => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack ? error.stack.split("\n") : [],
    path: error.path,
  }),
});
