
const express= require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { account, user } = require('../db');
// const mongoose= require("mongoose");
const { default: mongoose } = require('mongoose');
const accountRouter= express.Router();


accountRouter.get("/balance", authMiddleware, async (req,res)=>{
       
    const Account = await account.findOne({
        userId: req.userId
    });

    res.json({
        balance: Account.balance
    })

 

})


// accountRouter.post('/transfer', authMiddleware , async (req,res)=>{
//      const {amount,to} = req.body;
//      console.log(to);
//      console.log(req.body.amount);
     
     


//      const Account = await account.findOne({
//         userId:req.userId
//      })


//      if(Account.balance<amount){
//         res.status(400).json({
//             message:"insufficiend balance"
//         })
//      }
         

//      const toAccount = await account.findOne({
//         userId:to
//      })
//      console.log("thakur");
//      console.log(toAccount);




//      if(!toAccount){
//         res.status(400).json({
//             message:"invalid account"
//         })
//      }

//      await account.updateOne({
//         userId:req.userId
//      },{ $inc : {
//         balance: -amount
//      } })

//      await account.updateOne({
//         userId:to
//      },{
//        $inc:{
//         balance: amount
//        }
//      })

//      res.status(200).json({
//         messgae: "transfer successfull"
//      })
    


// })


accountRouter.post('/transfer',authMiddleware, async (req,res)=>{

    
    const {amount,to} = req.body;

    const session = await mongoose.startSession();

    session.startTransaction();

    // console.log(recession);

     
    const transferedByAccount = await account.findOne({
        userId:req.userId
    }).session(session)

    if(transferedByAccount.balance<amount){
        await session.abortTransaction()
        res.status(400).json({
            message:"insufficient amount"
        })
    }
    

    const transferedtoAccount = await account.findOne({
        userId:to
    }).session(session)

    if(!transferedtoAccount){
       await  session.abortTransaction()
        res.status(400).json({
            message:"invalid account hai"
        })
    }

    await account.updateOne(
        {
           userId: req.userId
        },
        {
         $inc:{
            balance: -amount
         }
        }
    ).session(session);

    await account.updateOne(
        {
         userId:to
        },{
           $inc:{
            balance: amount
           }
        }
    ).session(session);
    
    await session.commitTransaction()

    res.status(200).json({
        message:"transfer successfull"
    })







})











module.exports = accountRouter;