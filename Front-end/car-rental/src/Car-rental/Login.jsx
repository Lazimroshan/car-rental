import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [Login, setLogin] = useState({
    Email: "",
    Password: "",
  });
  const handlelogin = (event) => {
    setLogin({ ...Login, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    const login = await axios.post(`http://localhost:8000/Login`, {
      Email: Login.Email,
      Password: Login.Password,
    });

    if (login.data.message === "success") {
      localStorage.setItem("token", JSON.stringify(login.data.token));
      const userid = login.data.userId;
      navigate(`/Viewcars/${userid}`);
    } else {
      alert("Invalid username or password");
    }
    console.log(login.data);
  };

  return (
    <div>
      <div className="Login1">
        <div className="Login2">
        <h2>Login Here</h2>
          <Form onSubmit={handlesubmit} style={{ paddingTop: "20px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="Email"
                onChange={handlelogin}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="Password"
                onChange={handlelogin}
              />
            </Form.Group>
            <Button variant="danger" type="submit" style={{background:'none',fontWeight:'700',letterSpacing:'2px',textTransform:'uppercase'}}>
              Submit
            </Button>

            <a href="/Signup" style={{padding:"10px",color:'white'}}> Are you new here ? Signup</a>

          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
