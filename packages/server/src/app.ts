import Koa from "koa";
import Router from "@koa/router";

export const app = new Koa();

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello, world!";
});

app.use(router.routes()).use(router.allowedMethods());
