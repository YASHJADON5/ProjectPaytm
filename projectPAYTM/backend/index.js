
const express= require("express");
const router =  require('./routes/index.js')
const cors = require("cors")




const app=express();
app.use(cors());

app.use(express.json()); 

app.use('/api/v1', router);

const PORT= process.env.PORT || 5242;

app.listen(PORT,()=>{
    console.log("server is listening");
})

