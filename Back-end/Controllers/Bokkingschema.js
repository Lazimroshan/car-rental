const mongoose=require('mongoose')

const bookingschema=mongoose.Schema({
    Pickupdate:{type:Date},
    Dropdate:{type:Date},
    Coustmer:{type:String},
    Car:{type:String},
    Cost:{type:String},
    Reward:{type:Number,default:'10'},
    Phone:{type:String},
    Days:{type:Number},
    Status:{type:String,default:'Pending'},
    CoustmerId:{type:String},
    CarId:{type:String}

}) 

const booking=mongoose.model('Booking',bookingschema)

module.exports=booking 