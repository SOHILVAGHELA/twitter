import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    description: { type: String, require: true },
    like: { type: Array, default: [] },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },

  { timestamps: true }
);
export const Tweet = mongoose.model("Tweet", tweetSchema);
