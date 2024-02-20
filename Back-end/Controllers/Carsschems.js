const mongoose=require("mongoose")

const Carsschema=mongoose.Schema({
    Brand:{type:String},
    Model:{type:String},
    Year:{type:String},
    Fueltype:{type:String},
    Milage:{type:String},
    Dailyrentalrate:{type:String},
    Availability:{type:String,Enumerator :['Available', 'Rented', 'In Maintenance'], default: 'Available'},
    Transmition:{type:String},
    Image:{type:String}
})

const Car=mongoose.model('Car',Carsschema)

module.exports=Car 