import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
// import './Styles.css'
import { useNavigate } from "react-router-dom";

function Adminlogin() {
  const navigate = useNavigate();

  const [Login, setLogin] = useState({
    Name: "",
    Password: "",
  });
  const handlelogin = (event) => {
    setLogin({ ...Login, [event.target.name]: event.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    const login = await axios.post(`http://localhost:8000/AdminL`, Login);
    if (login.data.message === "success") {
      localStorage.setItem("token", JSON.stringify(login.data.token));
      const userid = login.data.userId;
      navigate(`/Adminhome/${userid}`);
    } else {
      alert("Invalid username or password");
    }
    console.log(login.data);
  };

  return (
    <div>
      <div className="Login12">
        <div className="Login21">
          <h2>Hello Admin</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="Name"
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Adminlogin;
