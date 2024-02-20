const express=require('express')
const { createuser, getsingleuser } = require('./Controllers/CREDuser')
const protect = require('./Middlewares/Tokenverify')
const loginuser = require('./Controllers/Login')
const createcars = require('./Controllers/Craetecars')
const editcardetails = require('./Controllers/Editdetails')
const Available = require('./Controllers/Availablecars')
const { viewcars, Singlecar } = require('./Controllers/Viewcars')
const {bookcar, bookings, editbooking, getsinglebooking} = require('./Controllers/Bookingcar')
const { createadmin } = require('./Controllers/Admin')
const loginadmin = require('./Controllers/AdminLogin')
const coustmerbooking = require('./Controllers/Coustmerbookig')



const router=express.Router() 
const Middleware=[protect]
router.route('/Cuser').post(createuser)
router.route('/Login').post(loginuser)
router.route('/AdminL').post(loginadmin)
router.route('/Createcars').post(Middleware,createcars) 
router.route('/Editcars/:id').put(Middleware,editcardetails)
router.route('/Viewcars').get(Middleware,viewcars)  
router.route('/Singlecar/:id').get(Middleware,Singlecar) 
router.route('/Cars').get(Available) 
router.route('/Bookingcar').post(Middleware,bookcar)
router.route('/singleuser/:id').get(Middleware,getsingleuser) 
router.route('/Admin').post(createadmin) 
router.route('/Bookings').get(Middleware,bookings)
router.route('/Editbooking/:id').put(Middleware,editbooking)
router.route('/Cbooking/:id').get(Middleware,coustmerbooking)
router.route('/Singlebooking/:id').get(getsinglebooking) 



module.exports=router 