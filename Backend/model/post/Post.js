import mongoose from "mongoose"


const Post = new mongoose.Schema(
{
    title: {
        type: String, 
        required: [true, "Post title is required"],
        
      },
  
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user author required here"],
      },
      description: {
        type: String,
        required: [true, "Post description is required"],
      },
      image: {
        type: String,
        default:
          "post images goes here",
      },
    },


);
