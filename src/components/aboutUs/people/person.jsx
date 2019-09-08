import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Yudi from "../images/YudiRosenzweig.jpeg"

function Person(props) {
  return (
    <React.Fragment>
      <Container>
        <div>
          <Row>
          <Col xs={6} md={4}>
      <Image src= "../images/YudiRosenzweig.jpeg/171x180" roundedCircle />
    </Col>
          </Row>
           
        
         

        </div>
      </Container>
    </React.Fragment>
  );
}

export default Person;
