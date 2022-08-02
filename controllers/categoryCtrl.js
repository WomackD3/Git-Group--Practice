import Category from "../model/category";

export const categoryCtrl = {
  async create(res, req) {
    try {
      const category = await Category.create({
        user: req.user._id,
        title: req.body.title,
      });
      res.status(201).json(category);
      
    } catch (error) {
      res.status(500).json({ error: error.message });
      
      
    }
    
  },
  //fetch all categories
  async fetchAll(req, res) {
    try {
      const categories = await Category.find({})
      .populate("user")
        .sort("-createdAt");
        res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: "House not found!" });
      
    }
  
  },
  // fetch
  // async fetch(req,)
}
