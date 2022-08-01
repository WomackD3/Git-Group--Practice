import User from "../model/user.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


let secret = process.env.JWT_SECRET || "123";

let generateToken = async (id) => {
  return await Jwt.sign({ id: id }, secret, {
    expiresIn: "14d",
  });
};


//register user 
export const userCtrl = {
  async create(req, res) {
    console.log(req.body);
    const { email, password } = req.body;
    //Check if user Exist
    const userExists = await User.findOne({ email });
    //hashedPassword
    const salt = await bcrypt.genSalt(1);
    const hashedPassword = await bcrypt.hash(password, salt)
    if (userExists) {
      return res.status(400).json({ error: 'user already exists' });
    }
    try {
      const user = await User.create({
        ...req.body,
        password: hashedPassword
      })

      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: await generateToken(user.id),
  
      });
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },
  //login
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          profilePhoto: user?.profilePhoto,
          isAdmin: user?.isAdmin,
          token: await generateToken(user.id)
        })
      } else {
        res.status(403).json({
          error: "Invaild  Login Credentials",
        });
      }
      
    } catch (error) {
      res.status(500).json({ error: error })
      
    }
  },
  //profile
  async profile(req, res) {
    const requestHeaders = req.headers.authorization;
    if (requestHeaders && requestHeaders.startWith("Bearer")) {
      try {
        let token = requestHeaders.split(" ")[1];
        const decoded = Jwt.verify(token, secret);
        let userProfile = await User.findOne(decoded.id).select("-password"
        );
        res.json(userProfile);

        
      } catch {
        res.status(401).json({ error: "Not Authorized / Incorrect Token" });
      }
    } else {
      res.status(400).json({ error: "Missing Token (ToT)" });
    }
  },
  //following
  async follow(req, res) {
    //1.Find the user you want to follow and update it's followers field
    //2. Update the login user following field
    const { followId } = req.body;
    const loginUserId = req.user.id;
    //find the target user and check if the login id exist
    const targetUser = await User.findById(followId);
    const alreadyFollowing = targetUser?.followers?.find(
      user => user?.toString() === loginUserId.toString()
    );
    if (alreadyFollowing) throw new Error("You have already followed this user");
    //1. Find the user you want to follow and update it's followers field
  await User.findByIdAndUpdate(
    followId,
    {
      $push: { followers: loginUserId },
      isFollowing: true,
    },
    { new: true }
  );
    await User.findByIdAndUpdate(
      loginUserId, {
        $push: { following: followId },
        
        

    },
    { new: true }
    )
    res.json("You have successfully followed this user");

  },
  //unfollow user
  async unfollow(req, res) {
    //1.Find the user you want to unfollow
    const { unFollowId } = req.body;
    const loginUserId = req.user.id;
    await User.findByIdAndUpdate(
      unFollowId,
      {
        $pull: { followers: loginUserId },
        isFollowing: false,
      },
      { new: true }
    )
    await User.findByIdAndUpdate(
      loginUserId,
      {
        $pull: { following: unFollowId },
      },
      { new: true }
    )
    res.json("You have successfully unfollowed this user");

  },
  //get users!
  async fetch(req, res) {
    try {
      const user = await User.find({}).populate("posts")
      res.json(user);
    } catch (error) {
      res.json(error);
      
    }

  },
  //delete users
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.findByIdAndDelete(id);
      if (deleted) {
        
      }
    } catch (error) {
      return res.status(200).send("User deleted!");
      
    }
  },
  //update user
  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);
      res.status(200).json(user);
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}




//get User gonna have to register & check if user exist 
// export const getUser = async (req, res) => {
//   try {
//     const user = await User.find();
//     res.json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// };



//delete user
// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = await User.findByIdAndDelete(id);
//     if (deleted) {
//       return res.status(200).send("User deleted!");
//     }

    
//   } catch (error) {
    
//   }
// }
//update User 
// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findByIdAndUpdate(_id,
//       {
//       firstName: req?.body?.firstName,
//       lastName: req?.body?.lastName,
//       email: req?.body?.email,
//       bio: req?.body?.bio,

//       },
//       );
//     res.status(200).json(user);
    
//   } catch (error) {
    
//   }
// }






//User to populate post
//user details
//update profile
//update password
//following
//update user when following another user
//block user
//generate email veri token
//account verification
//password reset 
//forget & create token 
//upload profile photo