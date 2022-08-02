import Comments from '../comments/comments.js';  
import post from '../model/post.js';
// import User from "../model/user.js";

export const CommentCtrl = {
  async create(req, res) {
    try {
    const { post_id } = req.params
    const postFound = await post.findById(post_id)

    if (postFound) {
      const comment = new Comments(req.body)
      await comment.save();

      postFound.comments.push(comment);
      await postFound.save();

      return res.status(200).json(comment);
    }

    // const { postId, description } = req.body;
      //create
      // const comment = await comment.create({
      //   post: postId,
      //   user,
      //   description,
      // })
      // res.status(2001).json(comment)
      throw new Error ("Could not find post");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  //update comments
  async update(req, res) {
    const { id } = req.params;
    try {
      const update = await Comments.findOne(id,
        {
          user: req?.user,
          description: req?.body?.description,
        },
        {
          new: true
        }
      );
      res.status(200).json(update)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  //delete comment
  async delete(req, res,)
  { 
    try {
      const { id } = req.params;
      const deleted = await Comments.findByIdAndDelete(id);
      if (deleted) {
        return res.status(200).json(deleted);
      }
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // get all comments
  async fetch(req, res) { 
    try {
      const comments = await Comments.find({}).sort("-created")
      if (comments) {
        return res.json(comments)
      }
    } catch (error) {
      
    }
  }
}