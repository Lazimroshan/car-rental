const booking = require("./Bokkingschema")


const coustmerbooking=async(req,res)=>{
    const _id=req.params.id
    const bookingss=await booking.find({CoustmerId:`${_id}`})
    res.json(bookingss)
}


module.exports=coustmerbooking