import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Col, Form } from "react-bootstrap";

import '../login/Login.css'


// https://flaviocopes.com/react-forms/


export default class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          email: "",
          password: "",
          confirmPassword: "",
            address_line1: '',
            city: '',
            province: '',
            postal_code: '',
            country: '',
        };
      }

      validateForm() {
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

    handleSubmit = event => {
        event.preventDefault();
        
        var address_line1 = this.state.address_line1;
        var city = this.state.city;
        var province = this.state.province;
        var postal_code = this.state.postal_code;
        var country = this.state.country;

        console.log(
          JSON.stringify(
            {"user":  {               
              "name": this.state.name,
              "email": this.state.email,
              "password": this.state.password,
              "address": {
                address_line1: address_line1,
                city: city,
                province: province,
                postal_code: postal_code,
                country: country
              }
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
                "password": this.state.password,
                "address": {
                  address_line1: address_line1,
                  city: city,
                  province: province,
                  postal_code: postal_code,
                  country: country
                }
                  }
                }
            ),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(e=>e.json())
          .then(data=> {
              console.log('Success:', data);


              if(data.email === 'has already been taken'){

                alert('email'+data.email)
              }
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
              placeholder="Katniss Everdeen"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="email" >
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder="BookLover123@gmail.com"
           value={this.state.email}
            onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="address_line1" >
            <FormLabel>Address</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="123 Something Rd."
           value={this.state.address_line1}
            onChange={this.handleChange}
            />
          </FormGroup>

      <Form.Row>
          <Form.Group controlId="city" as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="Toronto"
           value={this.state.city}
            onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="province" as={Col}>
            <Form.Label>Province</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="ON"
           value={this.state.province}
            onChange={this.handleChange}
            />
          </Form.Group>


          <Form.Group controlId="country" as={Col}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              placeholder="Canada"
           value={this.state.country}
            onChange={this.handleChange}
            />
          </Form.Group>
      </Form.Row>

          <FormGroup controlId="postal_code" >
            <FormLabel>Postal Code</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="M5N2S5"
           value={this.state.postal_code}
            onChange={this.handleChange}
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
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
            className = "button is-link"
          >
            Sign Up!
          </Button> 
        </Form>

      </div>
    );
    }
}
