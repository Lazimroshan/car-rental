const mongoose=require('mongoose')


const adminschema=mongoose.Schema({
    Name:{type:String},
    Password:{type:String}
})

const Admin=mongoose.model("Admin",adminschema)

module.exports=Admin 