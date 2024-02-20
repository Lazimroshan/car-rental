const mongoose=require('mongoose')

const userschema = mongoose.Schema({
    Username:{type:String,require:true,unique:true},
    Email:{type:String,require:true,unique:true},
    Password:{type:String,require:true,unique:true},
    Role:{type:String,default:'User'}
})

const User=mongoose.model("Carsuser",userschema) 

module.exports=User