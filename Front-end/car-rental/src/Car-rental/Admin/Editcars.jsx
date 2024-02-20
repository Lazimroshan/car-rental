import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Editcars() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));

  const [Car, setCar] = useState([]);

  const [Newcar, setNewcar] = useState({
    Brand: Car.Brand,
    Model: Car.Model,
    Year: Car.Year,
    Fueltype: Car.Fueltype,
    Milage: Car.Milage,
    Dailyrentalrate: Car.Dailyrentalrate,
    Availability: Car.Availability,
    Transmition: Car.Transmition,
    Image: Car.Image,
  });

  const logout=()=>{
    localStorage.removeItem('token')
    // navigate('')

  }

  useEffect(() => {

    try{  axios.get(`http://localhost:8000/Singlecar/${id}` , { headers:{Authorization: `Bearer ${token}`} }).then((resopnse) => {
      setCar(resopnse.data);
    });}
    catch(error){}

   
  }, []);

  const handleedit = (event) => {
    setNewcar({ ...Newcar, [event.target.name]: event.target.value });
    console.log(Newcar);
  };

  const handleslect = async(event) => {
    setNewcar({ ...Newcar, [event.target.name]: event.target.value });
    
    console.log();
  };
  const handlesubmit = async (event) => {
    event.preventDefault();
    const addcar = await axios.put(
      `http://localhost:8000/Editcars/${id}`,
      Newcar ,{ headers:{Authorization: `Bearer ${token}`} }
    );
    console.log(addcar);
    navigate("/Viewcarsadmin");
  };

  return (
    <div className="adminhome">
          <div><Navbar expand="lg" className="Nav1">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
          <Nav.Link href={`/Bookings`} className="Nav2">Bookings</Nav.Link>
            <Nav.Link href={`/Addcars`} className="Nav2">AddCar</Nav.Link>
            <Button variant="dark" onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    <div style={{textAlign:'center',color:'white',marginTop:'20px'}}><h2 >Edit Car</h2><br />
    <h2>{Car.Brand} {Car.Model}</h2></div>
    
      <div className="Adform">
        <Form onSubmit={handlesubmit}>
          <Row style={{margin:'0px'}}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={Car.Brand}
                  name="Brand"
                  onChange={handleedit}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={Car.Year}
                  name="Year"
                  onChange={handleedit}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Milage</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={Car.Milage}
                  name="Milage"
                  onChange={handleedit}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fueltype</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={Car.Fueltype}
                  name="Fueltype"
                  onChange={handleedit}
                />
              </Form.Group>
              <Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleslect}
                  name="Availability"
                  defaultValue={Car.Availability}
                >
                  <option>{Car.Availability}</option>
                  <option value="Available">Available</option>
                  <option value="Rented">Rented</option>
                  <option value="In Maintenance">In Maintenance</option>
                </Form.Select>
               
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={Car.Model}
                  name="Model"
                  onChange={handleedit}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dailyrentalrate</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={Car.Dailyrentalrate}
                  name="Dailyrentalrate"
                  onChange={handleedit}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Transmition</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={Car.Transmition}
                  name="Transmition"
                  onChange={handleedit}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="Image" disabled />
              </Form.Group>
              <Button type="submit" style={{width:'300px',marginLeft:'50px'}}>Add</Button>
             
              
            </Col>
          </Row>
          
        </Form>
      </div>
    </div>
  );
}

export default Editcars;
