const bcrypt=require('bcrypt')
const User = require('./Userschema')
const jwt=require('jsonwebtoken')


const loginuser=async(req,res)=>{
    const {Password,Email}=req.body
    const login= await User.findOne({Email})
    if(login &&(await bcrypt.compare(Password,login.Password)))
    {
        res.json({message:"success",
        token:tokengernate(login._id) ,
        userId:login._id
    })
    }
    else{
        res.json("Faild")
    }
}

const tokengernate=(id)=>{
    return jwt.sign({id},process.env.key,{expiresIn:'1d'})
}

module.exports=loginuser