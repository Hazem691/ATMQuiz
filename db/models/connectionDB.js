import mongoose from "mongoose";


const connectionDB = async ()=>{
      return await mongoose.connect('mongodb://localhost:27017/practiceMongoose').then(()=>{
        console.log("connected to database ....") ;
      }).catch((err)=>{
        console.log('error in connection',err) ;
      })
}

export default connectionDB ;































