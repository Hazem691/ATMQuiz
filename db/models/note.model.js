import { Schema, model } from "mongoose";


const noteSchema = new Schema({
    title : {
        type : String ,
        required : true ,
    },
    content : {
        type : String 
    },
    userId : {
        type : Schema.Types.ObjectId ,
        ref : "user" ,
        required : true
    }
}) ;

const noteModel = model('note' , noteSchema) ;


export default noteModel ;