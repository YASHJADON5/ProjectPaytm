const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')



const authMiddleware = (req,res,next)=>{

    const authHeader = req.headers.authorization;
    //  console.log(authHeader)
    if(!authHeader || !authHeader.startsWith('Bearer ')){
       
        return res.status(403).json({
            message:"code stopping here"
        })
    }

    const token = authHeader.split(' ')[1];
    // console.log(token);

    try{
        // console.log("thakur");

        const decoded= jwt.verify(token,JWT_SECRET);
        // console.log("yash");
        // console.log(decoded);

        if(decoded){
            
                req.userId=decoded.userId

                // console.log(req.userId);
                // console.log(decoded);
            
        }
        
        next();

    }
    catch(e){
        return res.status(403).json({
            message:"internal serwkjgnkjbvver error"
        })
    }




}

module.exports= authMiddleware
