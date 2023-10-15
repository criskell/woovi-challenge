import Koa from "koa";
import Router from "@koa/router";
import { graphqlHTTP } from "koa-graphql";

import { makeGraphQlHttpOptions } from "./graphql/makeGraphQlHttpOptions";

export const app = new Koa();

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Welcome!";
});

router.all("/graphql", graphqlHTTP(makeGraphQlHttpOptions));

app.use(router.routes()).use(router.allowedMethods());
