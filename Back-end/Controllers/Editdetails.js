const Car = require("./Carsschems")

const editcardetails=async(req,res)=>{
    const _id=req.params.id
    const {Brand,Model,Year,Fueltype,Milage,Dailyrentalrate,Availability,Transmition}=req.body
    const updated=await Car.findByIdAndUpdate(_id,{Brand,Model,Year,Fueltype,Milage,Dailyrentalrate,Availability,Transmition}) 
    res.json(updated)
}

module.exports=editcardetails