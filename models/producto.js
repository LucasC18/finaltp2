import mongoose from "mongoose";
import { Schema } from "mongoose";

const productoSchema = new Schema(
  {
    producto: {
      type: String,
      required: true,
      trim: true,
      maxlength: 250
    },
    stockAmount: {
      type: Number,
      required: true,
      min: 0
    },
  fechaIngreso: {
    type: String,
    default: () => new Date().toISOString().split("T")[0]
  }

  },
  {
    collection: "productos",
    versionKey: false,
    timestamps: true
  }
);

export const ProductoModel = mongoose.model("Producto", productoSchema);
