const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            enum:['user','admin'],     
        }
       
    },
     { timestamps: true }
)

const Signup = mongoose.model('Signup', SignupSchema)

module.exports = Signup;