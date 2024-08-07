import bcrypt from "bcrypt";
import userModel from "../../../db/models/user.models.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../services/sendEmail.js";

import { asyncHandler } from "../../utilities/asyncHandler.js";
import { AppError } from "../../utilities/classError.js";



//&------------------------------------------  signUp --------------------------------------------------

export const signUp = asyncHandler(async (req, res, next) => {
    const {name , email , password} = req.body;
    const userExist = await userModel.findOne({ email: email.toLowerCase() });
    if (userExist) {
    return next(new AppError("User is already exist ..."));
    }
    const token = jwt.sign({ email }, "generateTokenSecret", { expiresIn: 60 * 2 });
    const link = `${req.protocol}://${req.headers.host}/verifyEmail/${token}`;

    const refToken = jwt.sign({ email }, "generateTokenSecretRef");
    const refLink = `${req.protocol}://${req.headers.host}/refreshToken/${refToken}`;
    const hash = bcrypt.hashSync(password, 10);
    const user = new userModel({
        name,
        email,
        password : hash,
           
    })
    const newUser = await user.save();

    newUser ? res.json({msg : "done"}) : next(new AppError("User is not created...")) ;
})



//& =================================================== SignIn  =================================================


export const signIn = asyncHandler(async(req,res,next)=>{
    const {email , password} = req.body ;
    const user = await userModel.findOne({email : email}) ;
    console.log("we found the user is : ",user);
    if(!user || !bcrypt.compareSync(password, user.password)){
        return next(new AppError("User is not found or wrong password .....")) ;
    }
    const token = jwt.sign({email} , "generateTokenSecret") ;
    await userModel.updateOne({email},{loggedIn : true}) ;
    res.json({msg : "done" , token}) ;
})

