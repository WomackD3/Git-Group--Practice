import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
{
    title: {
        type: String, 
        required: [true, "Post title is required"],
        
      },
      description: {
        type: String,
        required: [true, "Post description is required"],
      },
      category: {
        type: String,
        required: [true, "Post category is required"],
      },
      isLiked: {
        type: Boolean,
        default: false,
      },
      isDisLiked: {
        type: Boolean,
        default: false,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user author required here"],
      },
      image: {
        type: String,
        default: "post images goes here",
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
      timestamps: true,
  })

  postSchema.virtual("comments", {
    ref: "Comment",
    foreignField: "post",
    localField: "_id",
  });
    
export default mongoose.model('Post', postSchema)

// likes: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// ],
// disLikes: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// ],