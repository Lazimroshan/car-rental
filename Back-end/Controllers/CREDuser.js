const bcrypt=require('bcrypt')
const User = require("./Userschema")
const jwt=require('jsonwebtoken')


const createuser=async (req,res)=>{

    const {Username,Email,Password,Role}=req.body

    const exisistingUser=await User.findOne({Email}) 

    if(exisistingUser){
        res.json("User Already exisist")
    }
    else{
    const salt=await bcrypt.genSalt(10)
    const Hpassword=await bcrypt.hash(Password,salt)
    const user=await User.create({
        Username,Email,Password:Hpassword,Role
    })
    res.json({
        id:user._id,
        Username:user.Username,
        Email:user.Email,
        Password:user.Password,
        Role:user.Role,
        Token:generatetocken(user._id) 
    })
    }
}

const generatetocken=(id)=>{
    return jwt.sign({id},process.env.key,{expiresIn:"1d"})
}

const deleteuser=async(req,res)=>{
    const _id=req.params.id
    const userdelete=await User.findByIdAndDelete(_id)
    res.json("User Deleted")
}

const edituser=async(req,res)=>{
    const _id=req.params.id 
    const {Username,Email,Password}=req.body
    const updated=await User.findByIdAndUpdate(_id,{Username,Email,Password})
    res.json(updated)
}

const getsingleuser=async(req,res)=>{

    const _id=req.params.id
    const single=await User.findById(_id)
    res.json(single)
}

module.exports={createuser,deleteuser,edituser,getsingleuser}