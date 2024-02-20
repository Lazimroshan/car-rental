import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormLabel, Nav, Navbar, Row } from "react-bootstrap";
import "./Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addcars() {

    const [Cars, setCars] = useState([])
    const navigate=useNavigate()

    const token=JSON.parse(localStorage.getItem("token"))



    const handlecars =(event)=>{
        setCars({...Cars,[event.target.name]:event.target.value})
        console.log(Cars);
    }

    const handlesubmit=async(event)=>{
        event.preventDefault();
        const Addedcars= await axios.post(`http://localhost:8000/Createcars`,Cars,{ headers:{Authorization: `Bearer ${token}`},} )
        console.log(Addedcars.data);
        navigate('/Viewcarsadmin')
    }

  return (
    <div className="adminhome">
      <div><Navbar expand="lg" className="Nav1">
      <Container>
      <Navbar.Brand href="#home" style={{color:'white'}} >RENTACARS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
          <Nav.Link href={`/Bookings`} className="Nav2">Bookings</Nav.Link>
            <Nav.Link href={`/Viewcarsadmin`} className="Nav2">Edit Cars</Nav.Link>
            <Nav.Link href="#link" className="Nav2" >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
      <div className="Adform" >
        <h2 style={{textAlign:'center',padding:'20px'}}>Add Cars</h2>
        <Form onSubmit={handlesubmit}>
          <Row style={{margin:'0'}}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="Brand" name='Brand' onChange={handlecars}   />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Year" name='Year' onChange={handlecars} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Milage</Form.Label>
                <Form.Control type="text" placeholder="Milage" name='Milage' onChange={handlecars} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fueltype</Form.Label>
                <Form.Control type="text" placeholder="Fueltype" name='Fueltype' onChange={handlecars} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Model" name='Model' onChange={handlecars} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dailyrentalrate</Form.Label>
                <Form.Control type="text" placeholder="Dailyrentalrate" name='Dailyrentalrate' onChange={handlecars} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Transmition</Form.Label>
                <Form.Control type="text" placeholder="Transmition" name='Transmition' onChange={handlecars} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Image" name='Image' onChange={handlecars} />
              </Form.Group>
            </Col>

          </Row>
          <Button type="submit" style={{marginLeft:'300px',width:'300px'}}>Add</Button>

        </Form>
      </div>
    </div>
  );
}

export default Addcars;
