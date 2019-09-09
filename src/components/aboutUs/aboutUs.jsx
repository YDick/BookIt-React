import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Yudi from "./images/YudiRosenzweig.jpeg";
import Yehudis from "./images/YehudisDick.jpg";
import Larisa from './images/LarisaGranat.jpeg'
import Person from "./people/person";

function AboutUs(props) {
  return (
    <React.Fragment style={{ display: "flex", displayContent: 'center', alignItems: 'center'  }}>
      <Container>
      <React.Fragment >
      <br/><br/>
          <Row>
            <Col>
              <Person
                image={Larisa}
                header="LARISA GRANAT"
                title="Full Stack Developer"
                text="Larisa is hardworking and passionate."
                github= "https://github.com/larisagranat"
              />
            </Col>
            <Col>
              <Person
                image={Yehudis}
                header="YEHUDIS DICK"
                title="Full Stack Developer"
                text="Yehudis is a problem solver and a team player."
                linkedin="https://www.linkedin.com/in/yehudis-dick/"
                github="https://github.com/YDick"
              />
            </Col>
            <Col>
              <Person
                image={Yudi}
                header="YUDI ROSENZWEIG"
                title="Full Stack Developer"
                text="Yudi is adaptable and possitive."
                github= "https://github.com/YudiR"
                linkedin= "https://www.linkedin.com/in/yudi-rosenzweig-a10617182/"
              />
            </Col>
          </Row>
          </React.Fragment >
      </Container>
    </React.Fragment>
  );
}

export default AboutUs;
