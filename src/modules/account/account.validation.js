import joi from "joi";
import { generalFields } from "../../utilities/generalFields.js";



export const createAccountValidation = {
    headers: generalFields.headers.required()
}


export const getBalanceValidation = {
    headers: generalFields.headers.required()

}

export const depositeValidation ={
    body : joi.object({
        amount : joi.number().required(),
        
    }),
    headers: generalFields.headers.required()
}

export const withdrawalValidation = {
    body : joi.object({
        amount : joi.number().required(), 
    }),
    headers: generalFields.headers.required()
}


export const getTransactionsValidation = {
    headers: generalFields.headers.required()
}