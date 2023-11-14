import fs from "node:fs/promises";
import path from "node:path";
import { printSchema } from "graphql";

import { schema } from "../src/graphql/schema";

const ROOT_SCHEMA_PATH = path.resolve("..", "..", "schema.graphql");

const main = async () => {
  const schemaCompiled = printSchema(schema);

  await fs.writeFile(ROOT_SCHEMA_PATH, schemaCompiled);

  console.log("Schema is compiled successfully.");
};

main();
