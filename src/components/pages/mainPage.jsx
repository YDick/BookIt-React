import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../googleMapsNpm/googleMaps";

function mainPage(props) {
  return (
    <React.Fragment>
      <Container>
        {/* <Row>
<Col md={{ span: 5, offset: 5 }}> <Map/> </Col>    
</Row> */}
        <h1>hey</h1>
        <div style={{
            display:"flex",
            // justifyContent:"center"
        }}>
        <Map />
        </div>
       
      </Container>
    </React.Fragment>
  );
}

export default mainPage;
