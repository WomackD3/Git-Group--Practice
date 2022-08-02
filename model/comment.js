import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User is required"],
  },
  description: {
    type: String,
    required: [true, "Comment description is required"],
  },
},
{ timestamps: true }
)

export default mongoose.model("Comment", commentSchema)