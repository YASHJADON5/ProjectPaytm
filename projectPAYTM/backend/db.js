// import mongoose from "mongoose"
const mongoose= require("mongoose");

const mongoUrl= "mongodb+srv://jadonyash2:6RaytQxjCX6JzSSD@cluster0.3yabjcf.mongodb.net/Users?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl)
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


const userSchema= new mongoose.Schema({
      username:{
        type:String,
        reqired:true,
        unique:true,
        lowercase:true,
        minLength:3,
        maxLength:30,
        trim:true
      },

    firstname: {
        type:String,
        reqired:true,
        trim:true
    } ,

    lastname:{
        type:String,
        reqired:true,
        trim:true
    },

    password:{
            type: String,
            required: true,
            minLenght:6
          
    }


})

const accountSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },

    balance:{
           type:Number,
           required:true
    }
})

const user= mongoose.model('user', userSchema)
const account= mongoose.model('account', accountSchema)

module.exports = {
    user,
    // account
    account
};