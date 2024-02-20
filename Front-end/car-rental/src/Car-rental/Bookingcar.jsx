import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Styles.css';
import Swal from 'sweetalert2';


function Bookingcar() {
  const { id, userid } = useParams();
  const navigate=useNavigate()

  const [User, setUser] = useState({});
  const [Car, setCar] = useState({});
  const [Pkdate, setPkdate] = useState('');
  const [Drdate, setDrdate] = useState('');
  const [Phone, setPhone] = useState('');
  const [Cost, setCost] = useState(0); // Initialize cost with 0
  const [DayCount, setDayCount] = useState(0); // Initialize day count with 0

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      axios
        .get(`http://localhost:8000/Singlecar/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setCar(response.data);
        });

      axios
        .get(`http://localhost:8000/singleuser/${userid}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
        });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }, [id, userid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const startDate = new Date(Pkdate);
    const endDate = new Date(Drdate);
    const differenceInMs = endDate - startDate;
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const daysDifference = Math.floor(differenceInMs / millisecondsInADay);
    const cost = daysDifference * Car.Dailyrentalrate;

    const data = {
      Pickupdate: Pkdate,
      Dropdate: Drdate,
      Coustmer: User.Username,
      Car: `${Car.Brand} ${Car.Model}`,
      Cost: cost,
      Phone: Phone,
      Days:DayCount,
      CoustmerId:userid,
      CarId:Car._id
    };

    try {
      const response = await axios.post(
        `http://localhost:8000/Bookingcar`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Booking response:", response.data);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
    Swal.fire({
      title: "Good job!",
      text: "Booking Success",
      icon: "success"
    }).then((result) => {
      if (result.isConfirmed || result.isDismissed) {
        navigate(`/Viewcars/${userid}`)
      }
    });



    // navigate(`/Viewcars/${userid}`)
  };

  // Update cost and day count when dates change
  useEffect(() => {
    if (Pkdate && Drdate) {
      const startDate = new Date(Pkdate);
      const endDate = new Date(Drdate);
      const differenceInMs = endDate - startDate;
      const millisecondsInADay = 1000 * 60 * 60 * 24;
      const daysDifference = Math.floor(differenceInMs / millisecondsInADay);
      setDayCount(daysDifference);
      setCost(daysDifference * Car.Dailyrentalrate);
    }
  }, [Pkdate, Drdate, Car.Dailyrentalrate]);


  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/')

  }
  return (
    <div>
      <div className="Booking">
      <div><Navbar  expand="lg" className="Nav1">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
          <Nav.Link href={`/Viewcars/${userid}`} className="Nav2" >View Cars</Nav.Link>
            <Nav.Link href={`/Mybookings/${userid}`} className="Nav2">My Bookings</Nav.Link>
            {/* <Nav.Link href="#link" className="Nav2" >Logout</Nav.Link> */}
            <Button variant="danger" onClick={logout}>Logout</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
        <div className="Booking1">
          <h2 style={{textAlign:'center',color:'white'}}>Book Now
          </h2>
        <Container>
          <Row>
            <Col>
              <div className="Bookingmaindiv" >
              <div><img src={Car.Image} alt=""  className="image1" /></div>
              <div className="">
                <h3 className="details">{Car.Brand} {Car.Model}</h3>
                <div className="desc1">
                <p className="desc"> Transmition : {Car.Transmition}</p>
                <p className="desc"> Fuel : {Car.Fueltype}</p>
                <p className="desc">Year : {Car.Year}</p>
                </div>
              </div>
              </div>
            </Col>
            <Col>
              <div className="Bform">
                <h5>Customer Name : {User.Username}</h5>
                <h5>Daily rental rate : ₹{Car.Dailyrentalrate}</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="pickUpDate">
                    <Form.Label>Pick-up Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={Pkdate}
                      onChange={(e) => setPkdate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="dropOffDate">
                    <Form.Label>Drop-off Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={Drdate}
                      onChange={(e) => setDrdate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      value={Phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Button type="submit">Book Now</Button>
                </Form>
                <div>
                  <p>Number of days: {DayCount}</p>
                  <p>Total Cost: ₹{Cost}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </div>
  );
}

export default Bookingcar;
