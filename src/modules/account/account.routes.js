import { Router } from "express";
import { createAccount, deposit, getBalance, getTransactions, withdrawal } from "./account.controller.js";
import { auth } from "../../../middlewares/auth.js";
import { validation } from "../../../middlewares/validation.js";
import { createAccountValidation, depositeValidation, getBalanceValidation, getTransactionsValidation, withdrawalValidation } from "./account.validation.js";



let router = Router() ;




router.post('/account', validation(createAccountValidation), auth, createAccount); // Wrap createAccount with asyncHandler


router.post('/account/deposit',validation(depositeValidation),auth,deposit) ;

router.post('/account/withdraw',validation(withdrawalValidation),auth,withdrawal) ;

router.get('/account/balance',validation(getBalanceValidation),auth , getBalance) ;

router.get('/account/transaction',validation(getTransactionsValidation),auth,getTransactions) ;
export default router ;