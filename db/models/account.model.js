
import mongoose, { Schema, model } from "mongoose";


const accountSchema = new Schema({
      accountBalance :{
        type : Number , 
        default : 0
      },
      userId :{
        type : mongoose.Types.ObjectId ,
        ref : "user"
      }
})


let accountModel = model("account",accountSchema) ;

export default accountModel ;