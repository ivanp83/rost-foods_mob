import mongoose from "mongoose";

export interface IProduct {
  type: [string];
  title: string;
  subTitle: string;
  shipping: string;
  amount: [string];
  price: [string];
  mainParams: [string];
  duffleParams: [string];
  palletParams: [string];
  pageId: string;
  picture: String;
}

const productSchema = new mongoose.Schema({
  type: [String],
  title: String,
  subTitle: String,
  shipping: String,
  amount: [String],
  price: [String],
  picture: String,
  mainParams: { title: String, data: [String] },
  duffleParams: { title: String, data: [String] },
  palletParams: { title: String, data: [String] },
  pageId: {
    type: mongoose.Types.ObjectId,
  },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
