import mongoose, { ConnectOptions } from "mongoose";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      __MONGO_URI__: string;
    }
  }
}

const mongooseOptions: ConnectOptions = {
  autoIndex: false,
  connectTimeoutMS: 10000,
};

export const connectWithMongoose = async (): Promise<typeof mongoose> => {
  jest.setTimeout(20000);
  return mongoose.connect(global.__MONGO_URI__, mongooseOptions);
};
