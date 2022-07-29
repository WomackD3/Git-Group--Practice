import User from "../model/User";


//get User gonna have to register & check if user exist 
export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//create user 
export const createUser = async (req, res) => { 
  try {
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,

    })
    res.status(201).res.json(user);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
    
  }


}

//delete user
export const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("User deleted!");
    }

    
  } catch (error) {
    
  }
}
//update User 
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(_id,
      {
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      bio: req?.body?.bio,

      },
      );
    res.status(200).json(user);
    
  } catch (error) {
    
  }
}


//login user

//User to populate post

//user details

//user profile

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