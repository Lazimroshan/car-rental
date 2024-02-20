import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./Admin.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [Cars, setCars] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));


  useEffect(() => {
    console.log(token);

    try {
      axios
        .get("http://localhost:8000/Bookings", {
      headers: {Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setBookings(response.data);
        });
        axios.get("http://localhost:8000/Viewcars",{
          headers: {Authorization: `Bearer ${token}` },
            }).then((resp) => {
      setCars(resp.data);
    });
    } catch (error) {}

    
  }, []);

  const updatedd = {
    Status: "Confirmed",
  };
  const updatedc = {
    Status: "Rejected",
  };

  const updatecar = {
    Availability: "Rented",
  };

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

  const handleConfirm = async (id, car) => {
    try {
      console.log(id);
      console.log(car);
      axios.put(`http://localhost:8000/Editcars/${car}`, updatecar, {
        headers: {Authorization: `Bearer ${token}` },
          });

      // Send a PUT request to update the booking status
      const updated = await axios.put(
        `http://localhost:8000/Editbooking/${id}`,
        updatedd, {
          headers: {Authorization: `Bearer ${token}` },
            }
      );
      console.log(updated);

      // Update the state to reflect the change in status
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === id ? { ...booking, Status: "Confirmed" } : booking
        )
      );
    } catch (error) {
      console.error("Error confirming booking:", error);
      // Handle error, show message, etc.
    }
  };

  const handleCancel = async (id, car) => {
    try {
      console.log(id);
      console.log(car);
      axios.put(`http://localhost:8000/Editcars/${car}`, updatecar, {
        headers: {Authorization: `Bearer ${token}` },
          });

      // Send a PUT request to update the booking status
      const updated = await axios.put(
        `http://localhost:8000/Editbooking/${id}`,
        updatedc, {
          headers: {Authorization: `Bearer ${token}` },
            }
      );
      console.log(updated);

      // Update the state to reflect the change in status
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === id ? { ...booking, Status: "Rejected" } : booking
        )
      );
    } catch (error) {
      console.error("Error confirming booking:", error);
      // Handle error, show message, etc.
    }
  };

  return (
    <div className="Viewcars23">
      <div>
        <Navbar expand="lg" className="Nav1">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link href={`/Addcars`} className="Nav2">
                  AddCars
                </Nav.Link>
                <Nav.Link href={`/Viewcarsadmin`} className="Nav2">
                  Edit Cars
                </Nav.Link>
                <Nav.Link href="#link" className="Nav2">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Row style={{ margin: "0px" }}>
        {bookings.map(
          (disp) => (
            // disp.Status === "Pending" ? (
            <Col className=" d-flex justify-content-center " key={disp._id}>
              <Card
                style={{
                  width: "18rem",
                  background: "none",
                  color: "white",
                  border: "solid white 1px",
                  marginTop: "30px",
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
                    <div>
                      <Button
                        variant="primary"
                        onClick={() => handleConfirm(disp._id, disp.CarId)}
                      >
                        Confirm
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleCancel(disp._id, disp.CarId)}
                      >
                        Reject
                      </Button>
                    </div>
                  ) : (
                    <div>{disp.Status}</div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          )
          // ) : null
        )}
      </Row>
    </div>
  );
}

export default Bookings;
