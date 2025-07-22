import mongoose from "mongoose";

const colletionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    image: {
      type: String,
      unique: true,
    },
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Collection =
  mongoose.models.Collection || mongoose.model("Collection", colletionSchema);
  
export default Collection;
