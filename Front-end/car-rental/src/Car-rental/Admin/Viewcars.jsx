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
import { Link } from "react-router-dom";
import "./Admin.css";

function Viewcars() {
  const [Cars, setCars] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    try {
      axios
        .get(`http://localhost:8000/Viewcars`, {
          headers: { Authorization: `Bearer ${token}` },
        }) 
        .then((response) => {
          setCars(response.data);
        });
    } catch (error) {}
  }, []);

  return (
    <div className="adminhome2">
      <div>
        <Navbar expand="lg" className="Nav1">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link href={`/Bookings`} className="Nav2">
                  Bookings
                </Nav.Link>
                <Nav.Link href={`/Addcars`} className="Nav2">
                  AddCars
                </Nav.Link>
                <Nav.Link href="#link" className="Nav2">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div style={{ marginLeft: "15px" }}>
        <Row style={{ margin: "0px" }}>
          {Cars.map((disp) => (
            <Col>
              <a href={`/Editcars/${disp._id}`}>
                <div className="Viewcaradmin">
                  <Card style={{ width: "19rem", background: "none" }}>
                    <Card.Img
                      src={disp.Image}
                      style={{ height: "500px", objectFit: "cover" }}
                    />

                    <Card.ImgOverlay>
                      <div className="container-fluid Carddiv1">
                        <Card.Body>
                          <Card.Title className="Cardtext1">
                            {disp.Brand} {disp.Model}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card.ImgOverlay>
                  </Card>

                  {/* <div>
              <img src={disp.Image} alt="" style={{width:'400px'}} />
            </div>

            <h4 className="carstxt">
              {disp.Brand} {disp.Model}
            </h4> */}
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Viewcars;
