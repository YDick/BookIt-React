import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Col, Form } from "react-bootstrap";

import '../login/Login.css'


// https://flaviocopes.com/react-forms/


export default class BookClubForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          description: "",
          genre: "",
          
            address_line1: '',
            city: '',
            province: '',
            postal_code: '',
            country: '',
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
            {"book_club":  {               
              "name": this.state.name,
              "description": this.state.description,
              "genre": this.state.genre,
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

        fetch("http://book-it.herokuapp.com/api/v1/book_clubs",{
            method: 'POST',
            body:
            JSON.stringify(
                {"book_club":  {               
                    "name": this.state.name,
                    "description": this.state.description,
                    "genre": this.state.genre,
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
              if(data.name == 'has already been taken'){
                alert('name'+data.name)
              }
            })
          .catch(error=>console.error('Error:', error));
        }
      

    render(){return (
      <div className="BookClubForm">
          <h1>Create a new book club!</h1>

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

          <FormGroup controlId="description" >
            <FormLabel>Description</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Description"
           value={this.state.description}
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


          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
            className = "button is-link"
          >
            Create
          </Button> 
        </Form>

      </div>
    );
    }
}
