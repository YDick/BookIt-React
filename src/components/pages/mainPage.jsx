import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../googleMapsNpm/googleMaps";
import Carousel from "../googleMapsNpm/carousel/carousel";

function mainPage(props) {
  return (
    <React.Fragment>
      <Container>
        <div
          style={{
            // display: "flex",
            // justifyContent:"center",
            // flexWrap: 'wrap'
          }}
        >
          
            <Map />
        
         

        </div>
      </Container>
    </React.Fragment>
  );
}

export default mainPage;
