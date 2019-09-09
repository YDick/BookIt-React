import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Yudi from "../images/YudiRosenzweig.jpeg";
import Icons from './icons/gitAndLinkedin'

function Person(props) {
  return (
    <React.Fragment >
      <Container>
        <div >
          <Row>
            <Col xs={6} md={4}>
              <Image width="215" height="215" src={props.image} roundedCircle />
              <br />
              <br />
              <Card bg="success" text="white" style={{ width: "15rem" }}>
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Text>{props.text}</Card.Text>
                </Card.Body>
              </Card>

              <Icons/>
              
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Person;
