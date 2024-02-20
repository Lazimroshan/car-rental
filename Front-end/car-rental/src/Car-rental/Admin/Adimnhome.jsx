import axios from "axios";
import React, { useEffect } from "react";

function Adimnhome() {


  // useEffect(() => {
  //   const token= JSON.parse(localStorage.getItem("token"))

  //   try{
  //     axios.get(``,{
  //       headers:{ Authorization: `Bearer ${token}` }
  //     })
  //   }catch(err){}
  // }, [])
  


  return (
    <div>
      <div className="adminhome">
        <div className="div1">
        <a href="/Addcars" className="addiv"> 
        <h3 style={{marginTop:'125px'}}>Add cars</h3> 
        </a>
        <a href="/Viewcarsadmin" className="addiv" >
         <h3 style={{marginTop:'125px'}}>View cars</h3>
        </a>
        <a href="/Bookings" className="addiv">
         <h3 style={{marginTop:'125px'}}>Booking</h3> 
        </a>
        </div>
      </div>
    </div>
  );
}

export default Adimnhome;
