import { graphql } from "graphql";

import {
  clearDatabase,
  connectWithMongoose,
  disconnectWithMongoose,
} from "../../../../test";
import { schema } from "../../../graphql/schema";
import { ProductModel } from "../productModel";

beforeAll(connectWithMongoose);
beforeEach(clearDatabase);
afterAll(disconnectWithMongoose);

describe("CreateProductMutation", () => {
  it("should create a new product", async () => {
    const mutation = `
      mutation CreateProductMutation($input: createProductInput!) {
        createProduct(input: $input) {
          product {
            id
          }
        }
      }
    `;

    const input = {
      name: "example",
      description: "example product",
      priceInCents: 100,
    };

    await graphql({
      schema,
      source: mutation,
      variableValues: { input },
    });

    const products = await ProductModel.find();

    expect(products.length).toBe(1);

    const productCreated = products[0];

    expect(productCreated.toObject()).toEqual(expect.objectContaining(input));
  });
});
