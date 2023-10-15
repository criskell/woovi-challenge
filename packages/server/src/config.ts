import assert from "assert";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "..", ".env"),
});

assert.ok(
  process.env.MONGODB_URI,
  "Missing `MONGODB_URI` environment variable"
);

export const config = {
  APP_PORT: process.env.APP_PORT || "3000",
  MONGODB_URI: process.env.MONGODB_URI,
};
