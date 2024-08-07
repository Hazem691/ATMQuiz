import express from  'express'
import connectionDB from './db/models/connectionDB.js'
import userRouter from './src/modules/user/user.routes.js';
import accountRouter from './src/modules/account/account.routes.js';
import { AppError } from './src/utilities/classError.js';
import { GlobalErrorHandler } from './src/utilities/asyncHandler.js';

const app = express()
const PORT = process.env.PORT || 4000;
connectionDB() ;
app.use(express.json());

app.use('/',userRouter) ;
app.use('/',accountRouter)
app.use('*',(req,res,next)=>{
    const err = new AppError(`invalid url`,404) ;
    next(err)
})

app.use(GlobalErrorHandler)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))


