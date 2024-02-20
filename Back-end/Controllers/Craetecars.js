const Car = require("./Carsschems")


const createcars=async(req,res)=>{
    const {Brand,Model,Year,Fueltype,Milage,Dailyrentalrate,Availabitly,Transmition,Image}=req.body
    const cars=await Car.create({
        Brand,Model,Year,Fueltype,Milage,Dailyrentalrate,Availabitly,Transmition,Image
    })
    res.json(cars)
}
module.exports=createcars  