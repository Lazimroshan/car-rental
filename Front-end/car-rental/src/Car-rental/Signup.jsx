import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate=useNavigate()
  const [Signup, setSignup] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handlesignup = (event) => {
    setSignup({...Signup,[event.target.name]: event.target.value });
  };

  const handlesubmit=async(event)=>{
    event.preventDefault()
    const signup=await axios.post(`http://localhost:8000/Cuser`,Signup)
    console.log(signup.data);
    navigate('/Login')
  }

  return (
    <div>
      <div className="Login1">
      <div className="Login2">
        <h2>Sign up Here</h2>
        <Form onSubmit={handlesubmit}>
          <FormLabel>Username</FormLabel>
          <Form.Control
            type="text"
            placeholder="Username"
            required
            name="Username"
            onChange={handlesignup}
          />
          <br />
          <FormLabel>Email</FormLabel>
          <Form.Control type="email" placeholder="Email" required name="Email" onChange={handlesignup} />
          <br />
          <FormLabel>Password</FormLabel>
          <Form.Control type="password" placeholder="Password" required  name="Password" onChange={handlesignup}/>
          <br />
          <Button variant="primary" type="submit">Signup</Button>
          <a href="/Login" style={{padding:'25px',color:'white'}}>Back To Login</a>
        </Form>
      </div>
      </div>
    </div>
  );
}

export default Signup;
