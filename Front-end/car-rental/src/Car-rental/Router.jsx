import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Carsview from './Carsview'
import Availablecars from './Availablecars'
import Bookingcar from './Bookingcar'
import Adminlogin from './Admin/Adminlogin'
import Adimnhome from './Admin/Adimnhome'
import Addcars from './Admin/Addcars'
import Viewcars from './Admin/Viewcars'
import Editcars from './Admin/Editcars'
import Bookings from './Admin/Bookings'
import Mybookings from './Mybookings'
function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Admin' element={<Adminlogin/>}/>
        <Route path='/Adminhome/:id' element={<Adimnhome/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Viewcars/:userid' element={<Carsview/>}/>
        <Route path='/Availablecars' element={<Availablecars/>}/>
        <Route path='/Details/:id/:userid' element={<Bookingcar/>} />
        <Route path='/Addcars' element={<Addcars/>}/>
        <Route path='/Viewcarsadmin' element={<Viewcars/>}/>
        <Route path='/Editcars/:id' element={<Editcars/>}/>
        <Route path='/Bookings' element={<Bookings/>}/>
        <Route path='/Mybookings/:userid' element={<Mybookings/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router