const booking = require("./Bokkingschema")


const bookcar=async(req,res)=>{
    const {Pickupdate,Dropdate,Coustmer,Car,Cost,Reward,Phone,Days,Status,CoustmerId,CarId}=req.body
    const book=await booking.create({
        Pickupdate,Dropdate,Coustmer,Car,Cost,Reward,Phone,Days,Status,CoustmerId,CarId
    })
    res.json(book)
}

const bookings=async(req,res)=>{
    const Bookings= await booking.find()
    res.json(Bookings)
}


const editbooking=async(req,res)=>{
    const _id=req.params.id
    const {Pickupdate,Dropdate,Coustmer,Car,Cost,Reward,Phone,Days,Status,CoustmerId}=req.body
    const Editbooking=await booking.findByIdAndUpdate(_id,{Pickupdate,Dropdate,Coustmer,Car,Cost,Reward,Phone,Days,Status,CoustmerId})
    res.json(Editbooking)
}

const getsinglebooking=async(req,res)=>{
    const _id=req.params.id
    const single=await booking.findById(_id)
    res.json(single)
}





module.exports={bookcar,bookings,editbooking,getsinglebooking}   