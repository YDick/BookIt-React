import React, { Component } from "react";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: "",
          password: "",
            address_line1: '',
            city: '',
            province: '',
            postal_code: '',
            country: '',
        };
      }


      componentDidMount() {
        console.log('componectDidMount')
        // fetch the current user for My Account
        fetch('http://book-it.herokuapp.com/api/v1/current', {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ sessionStorage.JWT
            }
        })
            .then(e => e.json())
            .then(json => {
                this.setState()
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