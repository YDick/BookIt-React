import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Yudi from "./images/YudiRosenzweig.jpeg";
import Person from "./people/person";

function AboutUs(props) {
  return (
    <React.Fragment style={{  backgroundColor: 'yellow' }}>
      <Container>
        <div>
          <Row>
            <Col>
              <Person
                image={Yudi}
                header="LARISA GRANAT"
                title="Full Stack Developer"
                text="As the founder and core developer, I manage client ."
              />
            </Col>
            <Col>
              <Person
                image={Yudi}
                header="YEHUDIS DICK"
                title="Full Stack Developer"
                text="As the founder and core developer, I manage client ."
              />
            </Col>
            <Col>
              <Person
                image={Yudi}
                header="YUDI ROSENZWEIG"
                title="Full Stack Developer"
                text="As the founder and core developer, I manage client ."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default AboutUs;
