const express= require('express');
const userRouter = express.Router();
const {z}= require('zod')
const {user} = require('../db')
const jwt= require('jsonwebtoken')
const JWT_SECRET = require('../config')
const authMiddleware = require('../middlewares/authMiddleware')
const {account} = require('../db')

const signupbody = z.object({

    username:z.string().email(),
    password:z.string(),
    firstname:z.string(),
    lastname:z.string()

})


userRouter.post('/signup' , async (req,res) => {
    try{
    const {success} = signupbody.safeParse(req.body)

    if(!success){

        return  res.status(411).json({
            message:"email already taken/ incorrect inputs"
        })

    }
  
    
   

    

    
    const existingUser =  await user.findOne({
    username:req.body.username
    })
   
    if(existingUser){
       return res.status(411).send({
            message:"email already taken"
        })
    }

    const User = await user.create({
        username:req.body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
    })

    const userId= User._id;
    
    const token = jwt.sign({
        userId
    },JWT_SECRET)

    // throw new Error('the code is malacious');
    res.status(200).send({
        message:"user created",
        token:token
    })

    const Balance = 1 + Math.random() * 10000;

    await account.create({
        userId,
        balance:Balance
    })
    // console.log(kccount);

}
catch(err){
    res.json({
        message:err.message
    })
}





})


const signinBody = z.object({
    username: z.string().email(),
	password: z.string()
})


userRouter.post('/signin' ,async (req,res)=>{
    
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const User= await user.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(User){

        const userId = User._id;

        const token= jwt.sign({userId},
            JWT_SECRET
        )

        // const decodedToken = jwt.verify(token, JWT_SECRET);
        // console.log(decodedToken);

        res.status(200).json({
            token:token
        })
    }
    else{
        res.status(411).json({
            token:"error while logging in"
        })
    }
    





})

  const updateBodySchema= z.object({
       firstname:z.string().optional(),
       lastname:z.string().optional(),
       password:z.string().optional()
  })

userRouter.put('/user',authMiddleware ,async (req,res)=>{

    const {success} = updateBodySchema.safeParse(req.body);
    //  console.log(req.body);
    if(!success){
        res.status(411).json({
            message:"error while updating information"
        })
    }

     

    //  console.log(req.userId);

     await user.updateOne( {
        _id: req.userId
    },{ $set: req.body }
)


    res.json({
        message : "update successfully"
    })

})

userRouter.get('/bulk', async(req,res)=>{

    const filter = req.query.filter;

    const User = await user.find({
          
        $or:[{
             firstname:{
                 "$regex":filter
             }
        },
        {
            lastname:{
                "$regex":filter
            }

        }]
  

    })
     res.json({
        user:User.map(users=> ({
            username:users.username,
            firstname:users.firstname,
            lastname:users.lastname,
            _id:users._id
        }) )
    })
   

})








module.exports = userRouter;