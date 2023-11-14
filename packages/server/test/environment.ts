import { MongoMemoryServer } from "mongodb-memory-server";
import NodeEnvironment from "jest-environment-node";
import { JestEnvironmentConfig, EnvironmentContext } from "@jest/environment";

class Environment extends NodeEnvironment {
  private mongod: MongoMemoryServer;

  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context);

    this.mongod = new MongoMemoryServer();
  }

  async setup() {
    await super.setup();
    await this.mongod.start();

    this.global.__MONGO_URI__ = this.mongod.getUri();
  }

  async teardown() {
    await super.teardown();
    await this.mongod.stop();
  }
}

export default Environment;
