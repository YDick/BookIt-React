import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";

function Icons(props) {
  
  return (
    <React.Fragment>
      
      <Container>
        <Row>
          <Col>
        <a href= {props.github} target="_blank" >
            <Image
            
              width="110"
              height="89"
              src="http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png"
            />
         </a>

         <a href= {props.linkedin} target="_blank" >
            <Image
              width="75"
              height="75"
              src="data:image/png;base64,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"
            />
            </a>
          </Col>
        </Row>
      </Container>
      </React.Fragment >
  );
}

export default Icons;
