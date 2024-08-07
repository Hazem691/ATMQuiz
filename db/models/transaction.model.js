
import mongoose, { Schema, model } from "mongoose";



let transactionSchema = new Schema({
      accountId : {
        type : mongoose.Types.ObjectId ,
        ref : 'account',
        required : true
      } ,
      amount :{
        type :Number ,
        required : true,
      } ,
      operationType :{
        type : String ,
        enum : ['deposit' , 'withdrawal'] ,
        required : true

      } ,
      data  :{
        type : Date ,
        default : Date.now
      }
})


let transactionModel = model('transaction',transactionSchema) ;
export default transactionModel ;