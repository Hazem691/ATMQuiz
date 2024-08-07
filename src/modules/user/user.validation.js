import joi from 'joi'

export const signUpValidate ={
    body : joi.object({
        name : joi.string().min(3).max(20).required(),
        email : joi.string().email().required(),
        password : joi.string().required(),
    })
}