const Admin = require("./Adminschema")
const bcrypt=require('bcrypt')


const createadmin=async(req,res)=>{
    const {Name,Password}=req.body
    const salt= await bcrypt.genSalt(10)
    const Hpassword= await bcrypt.hash(Password,salt)
    const Admins=await Admin.create({
        Name,Password:Hpassword
})
 res.json(Admins)
}

module.exports={createadmin}