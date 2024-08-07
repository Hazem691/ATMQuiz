import { Router } from "express";
import { auth } from "../../../middlewares/auth.js";
import { signIn, signUp } from "./user.controller.js";
import { validation } from "../../../middlewares/validation.js";
import { signUpValidate } from "./user.validation.js";




const router = Router() ;

router.post('/signUp',validation(signUpValidate),signUp);
router.post('/signIn',signIn) ;
export default router ;