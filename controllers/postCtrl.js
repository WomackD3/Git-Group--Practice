import Post from "../model/post.js";

//create post

export const postCtrl = {
  //create post
  async create(req, res) {
    try {
      let post = new Post(req.body);
      await post.save();
      // let post = await Post.create(req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  //fetch all post
  async fetchAll(req, res) {
    // const hasCategory = req.query.category;
    try {
      // if (hasCategory) {
        const posts = await Post.find()
          // .populate("user")
          // .populate("comments")
          // .sort("-createdAt");
        res.status(200).json(posts);
      // } else {
      //   const posts = await Post.find({})
      //     .populate("user")
      //     .populate("comments")
      //     .sort("-createdAt");
      //   res.json(posts);
      // }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //fetch single post
  async fetch(req, res) {
    const { id } = req.params;
    try {
      const post = await Post.findById(id)
        .populate("user")
        .populate("comments");
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  //update post
  async update(req, res) {
    const { id } = req.params;
    try {
      const post = await Post.findByIdAndUpdate(id, req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  //delete post
  async delete(req, res) {
    const { id } = req.params;
    try {
      const post = await Post.findOneAndDelete(id);
      res.status(200).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
};
