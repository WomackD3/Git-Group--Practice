import Post from "../model/post.js";


//create post

export const postCtrl = {
  //create post
  async create(req, res) {
    try {
      const post = new Post(req.body);
    await post.save();
    res.status(200).json(post);
    
    } catch (error) {
      res.status(500).json({ error: error.message });
    
   }
    
  },
  

}