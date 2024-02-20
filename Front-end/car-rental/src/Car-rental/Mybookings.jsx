import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Mybookings() {
  const navigate=useNavigate()
  const [Myboookings, setMyboookings] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  const { userid } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/Cbooking/${userid}` , {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setMyboookings(response.data);
    });
  }, [Mybookings]);
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/')}
  const convertToDateOnly = (isoDate) => {
    const dateObject = new Date(isoDate);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
    return formattedDate;
  };

  const updatedd = {
    Status: "Canceled",
  };

  const handlecancel = async (id) => {
    const updated = await axios.put(
      `http://localhost:8000/Editbooking/${id}`,
      updatedd,{
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setMyboookings((prevBookings) =>
    prevBookings.map((booking) =>
      booking._id === id ? { ...booking, Status: "Canceled" } : booking
    )
  );
    console.log(updated);
    
  };

  
  return (
    <div className=" Viewcars2">
      <Navbar expand="lg" className="Nav1">
        <Container fluid>
          <Navbar.Brand href="#home" style={{color:'white'}} >RENTACARS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href={`/Viewcars/${userid}`} className="Nav2">
                View Cars
              </Nav.Link>
              <Nav.Link href={`/Mybookings/${userid}`} className="Nav2">
                My Bookings
              </Nav.Link>
              <Button variant="danger" onClick={logout} >Log out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="Viewbooking" >
        
          {Myboookings.map((disp) => (
            <Col className=" d-flex justify-content-center " key={disp._id}>
              <Card
                style={{
                  width: "18rem",
                  background: "none",
                  color: "white",
                  border: " 1px solid white",
                }}
              >
                <Card.Body>
                  <Card.Title>{disp.Car}</Card.Title>
                  <Card.Text>
                    Customer Name: {disp.Coustmer} <br />
                    Pickup date: {convertToDateOnly(disp.Pickupdate)} <br />
                    Drop date: {convertToDateOnly(disp.Dropdate)} <br />
                    Phone: {disp.Phone} <br />
                    Cost: ₹{disp.Cost}
                  </Card.Text>
                  {disp.Status === "Pending" ? (
                    <Button
                      variant="danger"
                      onClick={() => handlecancel(disp._id)}
                    >
                      Cancel
                    </Button>
                  ) : (
                    <div>{disp.Status}</div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
      </div>
    </div>
  );
}

export default Mybookings;
