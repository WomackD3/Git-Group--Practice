# Backend readme 

###  Schema

``` user
const userSchema = new mongoose.Schema(
  {
    firstName: {
      required: [true, "First name is required"],
      type: String,
    },
    lastName: {
      required: [true, "Last name is required"],
      type: String,
    },
    profilePhoto: {
      type: String,
      default:
        "logo goes here",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    ```

     ```post
     const postSchema = new mongoose.Schema(
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

     ```

     ```
     add at end of post schema

     {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
  ```






