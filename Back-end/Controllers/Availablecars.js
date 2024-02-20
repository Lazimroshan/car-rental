const Car = require("./Carsschems")



const Available =async(req,res)=>{
    try{
        const Available=await Car.find({Availability:'Available'})
        res.json(Available)
    }
    catch(err){
        res.err().send("404")
    }
}

module.exports=Available