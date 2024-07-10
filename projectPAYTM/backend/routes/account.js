
const express= require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { account, user } = require('../db');
const mongoose= require("mongoose");

const accountRouter= express.Router();


accountRouter.get("/balance", authMiddleware, async (req,res)=>{
       
    const Account = await account.findOne({
        userId: req.userId
    });

    res.json({
        balance: Account.balance
    })

 

})


accountRouter.post('/transfer', authMiddleware , async (req,res)=>{
     const {amount,to} = req.body;
     console.log(to);
     console.log(req.body.amount);
     
     


     const Account = await account.findOne({
        userId:req.userId
     })


     if(Account.balance<amount){
        res.status(400).json({
            message:"insufficiend balance"
        })
     }
          console.log("yash");

     const toAccount = await account.findOne({
        userId:to
     })
     console.log("thakur");
     console.log(toAccount);




     if(!toAccount){
        res.status(400).json({
            message:"invalid account"
        })
     }

     await account.updateOne({
        userId:req.body
     },{ $inc : {
        balance: -amount
     } })

     await account.updateOne({
        userId:to
     },{
       $inc:{
        balance: amount
       }
     })

     res.status(200).json({
        messgae: "transfer successfull"
     })
    


})











module.exports = accountRouter;