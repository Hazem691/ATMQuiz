import jwt from "jsonwebtoken";
import userModel from "../db/models/user.models.js";

export const auth = async (req,res,next)=>{
        const {token} = req.headers;
        if(!token){
            return res.json({msg : "Token is not exist ...."}) ;
        }
        const decoded = jwt.verify(token , 'generateTokenSecret') ;
        const user = await userModel.findOne({email : decoded.email}) ;
        if(!user){
           res.status(404).json({msg : "User is not found ..."});
        }
        req.user = user ;
        next() ;
    
}