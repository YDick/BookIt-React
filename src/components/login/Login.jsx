import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import {Link} from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    fetch("http://book-it.herokuapp.com/api/v1/user_token",{
      method: 'POST',
      body:
      JSON.stringify(
      {"auth": this.state}
      // {
      //   "auth":{
      //     "email": "seed@yahoo.com",
      //     "password": "password123"
      //   }
      // }
      ),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(e=>e.json())
    .then(data=> {
        console.log('Success:', data);
        sessionStorage.setItem("JWT", JSON.stringify(data));
      })
    .catch(error=>console.error('Error:', error));
  }

 

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              value={this.state.email}
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
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>

        <Link className="link" to="/signup">Don't have an account? <span className="link-signup">Signup</span></Link>
      </div>
    );
  }
}
