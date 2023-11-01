/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import pkg from "./package.json";

const config: Config = {
  displayName: pkg.name,

  clearMocks: true,

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  testPathIgnorePatterns: ["/node_modules/", "./dist"],
};

export default config;
