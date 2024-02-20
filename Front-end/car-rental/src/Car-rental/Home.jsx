import React from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import video from "../Car-rental/video.mp4";

function Home() {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/Login");
  };

  return (
    <div>
      <div className="Home">
        <div className="homeimage">
          <Navbar expand="lg" className="Nav5">
            <Container>
              <Navbar.Brand href="#home">RENTACARS</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text1">
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link href="/Signup">Signup</Nav.Link>
                  <Nav.Link href="/Admin">Admin</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="div112">
            <div>
              {" "}
              <h1 className="home-moto" style={{ marginTop: "100px" }}>
                Make every mile count <br />
                Choose our rentals for your next trip.
              </h1>
              <a className="btn1" href="/Login">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Explore more
              </a>
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
      
  
    </div>
  );
}

export default Home;
