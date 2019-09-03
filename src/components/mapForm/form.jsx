import React from "react";
import {Form, Button, FormGroup, FormControl, FormLabel, Col, Row} from "react-bootstrap";

function MapForm(props) {

  console.log("hello formmmm::::::::::::::::::");
  return (
    <React.Fragment>
   
      <Form>
  <Row>
    <Col>
      <Form.Control placeholder=" Street address "
            type="text"
            name="street number"
            value={props.streetAddress}
            onChange={event => {
              props.dataChange({streetAddress:event.target.value})
            }} />
    </Col>
    <Col>
      <Form.Control placeholder="City"
            type="text"
            name="city"
            value={props.city}
            onChange={event => {
              props.dataChange({city:event.target.value})
            }} />
    </Col>
    <Col>
      <Form.Control   placeholder="Postal Code"
            type="text"
            name="postal code"
            value={props.postalCode}
            onChange={event => {
              props.dataChange({postalCode:event.target.value})
            }} />
    </Col>
    <Col>
    <Button  value="Submit"
          onClick={e => {
            e.preventDefault();
           

            props.submit();
          }}>
    Submit
  </Button>
    </Col>
  </Row>
</Form>
      
    </React.Fragment>
  );
}
export default MapForm;
