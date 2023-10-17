import mongoose, { Document, InferSchemaType, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priceInCents: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type ProductDocument = InferSchemaType<typeof ProductSchema> & Document;

export const ProductModel = mongoose.model<ProductDocument>(
  "Product",
  ProductSchema
);
