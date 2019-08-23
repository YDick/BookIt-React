import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


// https://flaviocopes.com/react-forms/


export default class Signup extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: false,
          email: "",
          password: "",
          confirmPassword: "",
          confirmationCode: "",
          newUser: null
        };
      }

      validateForm() {
        return (
          this.state.email.length > 0 &&
          this.state.password.length > 0 &&
          this.state.password === this.state.confirmPassword
        );
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            newUser: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        })
        console.log(this.state.newUser)

        fetch("http://book-it.herokuapp.com/api/v1/users",{
            method: 'POST',
            body:
            JSON.stringify(
            {"user": this.state.newUser}
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

        <form onSubmit={this.handleSubmit}>

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

          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Sign Up!
          </Button>
        </form>

      </div>
    );
    }
}
