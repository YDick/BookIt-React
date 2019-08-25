import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Col, Row, Form } from "react-bootstrap";

// Importing the Bulma CSS library for form
// import 'bulma/css/bulma.css';


// https://flaviocopes.com/react-forms/


export default class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          email: "",
          password: "",
          confirmPassword: "",
          address: {
            address_line1: '',
            city: '',
            province: '',
            postal_code: '',
            country: ''
          }
        };
      }

      validateForm() {
        if (this.state.password !== this.state.confirmPassword) {
          alert('passwords do not match')
        }

        return (
          this.state.email.length > 0 &&
          this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
          this.state.password.length > 6 &&
          this.state.password === this.state.confirmPassword
        );
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
      handleAddressChange = event => {
        this.setState({address: {
          [event.target.id]: event.target.value
           }
        });
      }

    handleSubmit = event => {
        event.preventDefault();
        console.log(
          JSON.stringify(
            {"user":  {               
              "name": this.state.name,
              "email": this.state.email,
              "password": this.state.password,
              "address": this.state.address
                }
              }
          )
        )

        fetch("http://book-it.herokuapp.com/api/v1/users",{
            method: 'POST',
            body:
            JSON.stringify(
            {"user":  {               
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password}
            }
            ),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(e=>e.json())
          .then(data=> {
              console.log('Success:', data);
            })
          .catch(error=>console.error('Error:', error));
        }
      

    render(){return (
      <div className="Signup">
          <h1>Sign Up Here!</h1>

        <Form onSubmit={this.handleSubmit}>

        <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="email" >
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
           value={this.state.email}
            onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="address" >
            <FormLabel>Address</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="123 Something Rd."
           value={this.state.address.address_line1}
            onChange={this.handleAddressChange}
            />
          </FormGroup>

      <Form.Row>
          <Form.Group controlId="city" as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="Toronto"
           value={this.state.address.city}
            onChange={this.handleAddressChange}
            />
          </Form.Group>

          <Form.Group controlId="prov" as={Col}>
            <Form.Label>Province</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="ON"
           value={this.state.address.province}
            onChange={this.handleAddressChange}
            />
          </Form.Group>


          <Form.Group controlId="country" as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="Canada"
           value={this.state.address.country}
            onChange={this.handleAddressChange}
            />
          </Form.Group>
      </Form.Row>

          <FormGroup controlId="postal_code" >
            <FormLabel>Postal Code</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="M5N2S5"
           value={this.state.address.postal_code}
            onChange={this.handleAddressChange}
            />
          </FormGroup>


          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <FormGroup controlId="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              placeholder="Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <button
            block
            disabled={!this.validateForm()}
            type="submit"
            className = "button is-link"
          >
            Sign Up!
          </button> 
        </Form>

      </div>
    );
    }
}
