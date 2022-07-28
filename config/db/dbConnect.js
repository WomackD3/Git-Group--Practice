import mongoose from "mongoose";

const dbConnect = async () => { 
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      
    })
    console.log('mongodb is connected');
    
  } catch (error) {
    console.log(`error ${error.message}`);
    
  }
}

// module.exports = dbConnect;

export default dbConnect