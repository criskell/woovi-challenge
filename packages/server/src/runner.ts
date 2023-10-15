import mongoose from "mongoose";
import process from "process";

import { app } from "./app";
import { config } from "./config";

export const run = async () => {
  await runDatabase();

  const server = app.listen(config.APP_PORT, () => {
    console.log(`Running at http://localhost:${config.APP_PORT}`);
  });
};

const runDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
  } catch (e) {
    console.error("An error occurred while connecting to your database.", e);
    process.exit(1);
  }
};
