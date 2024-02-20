const bcrypt=require('bcrypt')
const Admin = require('./Adminschema')
const jwt=require('jsonwebtoken')

 const loginadmin=async(req,res)=>{
    const {Name,Password}=req.body
    const login=await Admin.findOne({Name})
    if(login &&(await bcrypt.compare(Password,login.Password)))
    {
        res.json({message:"success",
        token:tokengernate(login._id) ,
        userId:login._id})
    }
    else{
        res.json('faild')
    }

 }

const tokengernate=(id)=>{
    return jwt.sign({id},process.env.key,{expiresIn:'1d'})
}

module.exports=loginadmin