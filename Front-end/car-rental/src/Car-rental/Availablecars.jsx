import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Availablecars() {

    const [Cars, setCars] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:8000/Cars`).then((response) => {
        setCars(response.data);
        console.log(response.data);
      });
    }, []);
  return (
    <div>



         <div className="Viewcars">
        <Container>
          <Row>
          {Cars.map((disp) => (
              <Col >
            <div style={{marginTop:"50px"}}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={disp.Image} />
                <Card.Body>
                  <Card.Title>
                    {disp.Brand} {disp.Model}
                  </Card.Title>
                   <Card.Text>
                   {disp.Transmition},{disp.Fueltype}
                  </Card.Text>
                  <Link to={`/Details/${disp._id}`}  ><Button variant="primary">Details</Button></Link>
                </Card.Body>
              </Card>
            </div>
            </Col>
          ))}
          </Row>
          </Container>
      </div>
    </div>
  )
}

export default Availablecars