import Comments from '../comments/comments.js';  
import User from "../model/user.js";
export const CommentCtrl = {
  async create(req, res) {
    const user = req.User
    const { postId, description } = req.body;
    try {
      //create
      const comment = await comment.create({ 
        post: postId,
        user,
        description,
      })
      res.status(2001).json(comment)
    } catch (error) {
      res.status(500).json({ error: error.message });
      
    }
  },
  //update comments
  async update(req, res) {
    const { id } = req.params;
    try {
      const update = await comment.findOne(id,
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
      const deleted = await Comment.findByIdAndDelete(id);
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
      const comments = await comments.find({}).sort("-created")
      if (comments) {
        return res.json(comments)
      }
    } catch (error) {
      
    }
  }
}