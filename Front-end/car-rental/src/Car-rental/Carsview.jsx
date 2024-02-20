import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styles.css";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function Carsview() {
  const {userid} = useParams()
  
  const navigate= useNavigate()
  const [Cars, setCars] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      axios
        .get(`http://localhost:8000/Viewcars`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setCars(response.data);
          console.log(response.data);
        });
    } catch (err) {}
  }, []);


  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/')

  }

  return (
    <div>
      
      <div className="Viewcars">
      <div><Navbar expand="lg" className="Nav1">
      <Container>
      <Navbar.Brand href="#home" style={{color:'white'}} >RENTACARS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href={`/Mybookings/${userid}`} className="Nav2">My Bookings</Nav.Link>
            {/* <Nav.Link href="#link" className="Nav2" >Logout</Nav.Link> */}
            <Button variant="danger" onClick={logout}>Log out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
        <Container>
          <Row>
            {Cars.map((car, index) => (
              <Col key={index}>
                <div className="Card1">
                  <Card style={{ width: "19rem" ,background:'none' }}>
                    <Card.Img src={car.Image} style={{height:'500px' ,objectFit:'cover'}} />
                    
                    <Card.ImgOverlay >
                    <div className="container-fluid Carddiv3">
                    <Card.Body>
                      <Card.Title className="Cardtext3">
                        {car.Brand} {car.Model}
                      </Card.Title>
                      <Card.Text className="Cardtext3">
                        {car.Transmition}, {car.Fueltype}
                      </Card.Text>
                      {car.Availability === "Available" ? (
                        <Link to={`/Details/${car._id}/${userid}`}>
                          <Button variant="dark">Details</Button>
                        </Link>
                      ) : (
                        <span style={{color:'white'}}>{car.Availability}</span>
                      )}
                    </Card.Body>
                    </div> 
                    </Card.ImgOverlay>
                   
                  </Card>
                </div>
              </Col>
            ))}
            {/* <button onClick={logout}>Logout</button> */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Carsview;
