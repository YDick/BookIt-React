import React, { Component } from "react";
import {
  Row,
  Button,
  Col,
  Form
} from "react-bootstrap";

import "../login/Login.css";

// https://flaviocopes.com/react-forms/

export default class BookClubForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      genre: "",

      address_line1: "",
      city: "",
      province: "",
      postal_code: "",
      country: ""
    };
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.description.length > 0 &&
      this.state.genre.length > 0 &&
      this.state.address > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    var address_line1 = this.state.address_line1;
    var city = this.state.city;
    var province = this.state.province;
    var postal_code = this.state.postal_code;
    var country = this.state.country;

    console.log(
      JSON.stringify({
        book_club: {
          name: this.state.name,
          description: this.state.description,
          genre: this.state.genre,
          address: {
            address_line1: address_line1,
            city: city,
            province: province,
            postal_code: postal_code,
            country: country
          }
        }
      })
    );

    fetch("http://book-it.herokuapp.com/api/v1/book_clubs", {
      method: "POST",
      body: JSON.stringify({
        book_club: {
          name: this.state.name,
          description: this.state.description,
          genre: this.state.genre,
          address: {
            address_line1: address_line1,
            city: city,
            province: province,
            postal_code: postal_code,
            country: country
          }
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(e => e.json())
      .then(data => {
        console.log("Success:", data);
        if (data.name === "has already been taken") {
          alert("name" + data.name);
        }
      })
      .catch(error => console.error("Error:", error));
  };

  render() {
    return (
      <div className="BookClubForm">
        <h1>Create a new book club!</h1>

        <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Name" />
            </Col>
          </Form.Group>
          {/* <Form.Group controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group> */}
          <Form.Group as={Row} controlId="formPlaintextDescription">
            <Form.Label column sm="2">
              Description
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Description" />
            </Col>
          </Form.Group>
          {/* <FormGroup controlId="description">
            <FormLabel>Description</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </FormGroup> */}
          <Form.Group as={Row} controlId="formPlaintextAddress">
            <Form.Label column sm="2">
              Address
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Address" />
            </Col>
          </Form.Group>
          {/* <FormGroup controlId="address_line1">
            <FormLabel>Address</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="123 Something Rd."
              value={this.state.address_line1}
              onChange={this.handleChange}
            />
          </FormGroup> */}
           <Form.Row>
          <Form.Group as={Row} controlId="formPlaintextCity">
            <Form.Label column sm="2">
              City
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="City" />
            </Col>
          </Form.Group>
         
            {/* <Form.Group controlId="city" as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                placeholder="Toronto"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </Form.Group> */}
             <Form.Group as={Row} controlId="formPlaintextProvince">
            <Form.Label column sm="2">
            Province
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Province" />
            </Col>
          </Form.Group>
            {/* <Form.Group controlId="province" as={Col}>
              <Form.Label>Province</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                placeholder="ON"
                value={this.state.province}
                onChange={this.handleChange}
              />
            </Form.Group> */}
             <Form.Group as={Row} controlId="formPlaintextCountry">
            <Form.Label column sm="2">
              Country
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Country" />
            </Col>
          </Form.Group>
            {/* <Form.Group controlId="country" as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                placeholder="Canada"
                value={this.state.country}
                onChange={this.handleChange}
              />
            </Form.Group> */}
          </Form.Row>
          <Form.Group as={Row} controlId="formPlaintextPostal Code">
            <Form.Label column sm="2">
              Postal Code
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Postal Code" />
            </Col>
          </Form.Group>
          {/* <FormGroup controlId="postal_code">
            <FormLabel>Postal Code</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="M5N2S5"
              value={this.state.postal_code}
              onChange={this.handleChange}
            />
          </FormGroup> */}

          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
            className="button is-link"
          >
            Create
          </Button>

        
        </Form>
      </div>
    );
  }
}
