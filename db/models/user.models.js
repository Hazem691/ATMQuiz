import {Schema , model} from "mongoose";


const userSchema = new Schema({
    name : {
        type : String ,
        required : true 
    } ,
    email : {
        type : String ,
        required : true 
    },
    password : {
        type : String ,
        required : true
    }, loggedIn :{
        type : Boolean ,
        default : false
    },
   
},{
    timestamps : false ,
    versionKey : false ,
    
})
 


const userModel = model('user' , userSchema) ;

export default userModel ;



