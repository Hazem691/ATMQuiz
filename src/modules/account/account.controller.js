import accountModel from "../../../db/models/account.model.js";
import transactionModel from "../../../db/models/transaction.model.js";

import { asyncHandler } from "../../utilities/asyncHandler.js"
import { AppError } from "../../utilities/classError.js";



export const createAccount = asyncHandler(async(req,res,next)=>{
     
      let account = await accountModel.create({
         userId : req.user._id
      }) ;
      res.json({msg : "done",account}) ;
       
})




export const deposit = asyncHandler(async(req,res,next)=>{
    const {amount} = req.body ;
    let account = await accountModel.findOne({userId : req.user._id});
    if(!account){
        return next(new AppError('account not found...'));
    }
    account.accountBalance +=amount ;
    await account.save() ;
    let transaction = await transactionModel.create({
        accountId : account._id ,
        amount : amount ,
        operationType :'deposit'
    }) ;

    res.json({msg : "done" , account}) ;
}) ;


export const withdrawal = asyncHandler(async (req,res,next)=>{
    const {amount} = req.body ;
    let account = await accountModel.findOne({userId : req.user._id}) ;
    if(!account){
        return next(new AppError('account is not found')) ;
    }

    if(account.accountBalance < amount){
        return next(new AppError("you don't have enough money"));
    }
    account.accountBalance -= amount ;
    await account.save() ;
    let transaction = await transactionModel.create({
        accountId : account._id ,
        amount : amount ,
        operationType : 'withdrawal'
    }) ;
    res.json({msg : "done" , account}) ;
})


export const getBalance = asyncHandler(async(req,res,next)=>{
    let account = await accountModel.findOne({userId : req.user._id}) ;
    if(!account){
        return next(new AppError('account is not found..')) ;
    }
    res.json({msg :"done" , balance : account.accountBalance}) ;
})


export const getTransactions = asyncHandler(async(req,res,next)=>{
    let account = await accountModel.findOne({userId : req.user._id}) ;
    if(!account){
        return next(new AppError('account is not found..')) ;
    }
    let trans = await transactionModel.find({accountId : account._id});
    res.json({msg : "done" , trans}) ;
})



