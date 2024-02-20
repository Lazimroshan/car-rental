const Car = require("./Carsschems")

const viewcars=async(req,res)=>{
    const viewall=await Car.find()
    res.json(viewall)
}


const Singlecar=async(req,res)=>{
    const _id=req.params.id
    const single=await Car.findById(_id)
    res.json(single)
}

module.exports={viewcars,Singlecar}