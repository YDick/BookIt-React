import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Col, Row, Form, Image } from "react-bootstrap";
import "./UserInfo.css"


export default class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null, 
          name: '',
          email: "",
          password: "",
          confirmPassword: "",
            address_line1: '',
            city: '',
            province: '',
            postal_code: '',
            country: '',
            gravatar: '',
            edit: true
        };
      }


      componentDidMount() {
        console.log('componectDidMount')

        // fetch the *current user* for My Account
        fetch('https://book-it.herokuapp.com/api/v1/current', {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ sessionStorage.JWT
            }
        })
            .then(e => e.json())
            .then(json => {
                let user = json.current_user;
                this.setState({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                      address_line1: user.address.address_line1,
                      city: user.address.city,
                      province: user.address.province,
                      postal_code: user.address.postal_code,
                      country: user.address.country,
                      gravatar: json.gravatar
                })
                console.log("state from mount: " + this.state)
            })
            .catch(error=>console.error('Error:', error));

    }


    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    // update user
    handleSubmit = event => {
        event.preventDefault();

        var address_line1 = this.state.address_line1;
        var city = this.state.city;
        var province = this.state.province;
        var postal_code = this.state.postal_code;
        var country = this.state.country;


        fetch(`http://book-it.herokuapp.com/api/v1/users/${this.state.id}`,{
            method: 'PATCH',
            body:
            JSON.stringify(
              {"user":  {               
                "name": this.state.name,
                "email": this.state.email,
                // "password": this.state.password,
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
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ sessionStorage.JWT
            }
          }).then(e=>e.json())
          .then(data=> {
              console.log('Success:', data);
              this.props.edit();
              alert('Changes have been saved!');

              }
            )
          .catch(error=>console.error('Error:', error));
        }

    validateForm() {
        return (
          this.state.name.length > 0 &&
          // this.state.password.length > 6 &&
          this.state.password === this.state.confirmPassword
        );
      }
     

    render()  {
        return (
      <div className="Signup">
          <h1>My Account</h1>

        <Image src={this.state.gravatar} alt="" rounded />

        <Form>
        <FormGroup as={Row} controlId="name">
            <FormLabel column sm="4">Name</FormLabel>
            <Col sm="8">
                <Form.Control
                    autoFocus
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="email" >
            <FormLabel column sm="4">Email</FormLabel>
            <Col sm="8">
            <Form.Control
                    readOnly
                    autoFocus
                    plaintext
                    type="text"
                    value={this.state.email}
                />
            </Col>
          </FormGroup>

          <FormGroup as={Row} controlId="address_line1" >
            <FormLabel column sm="4">Address</FormLabel>
            <Col sm="8">
                <Form.Control
                    autoFocus
                    type="text"
                    value={this.state.address_line1}
                    onChange={this.handleChange}
                    />
            </Col>
          </FormGroup>

      <Form.Row>
          <Form.Group controlId="city" as={Col}>
            <Form.Label>City</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    className="postalInput"
                    value={this.state.city}
                    onChange={this.handleChange}

                    />
          </Form.Group>

          <Form.Group controlId="province" as={Col}>
            <Form.Label>Province</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={this.state.province}
                    onChange={this.handleChange}
                    className="postalInput"
                    />
          </Form.Group>


          <Form.Group controlId="country" as={Col}>
            <Form.Label>Country</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={this.state.country}
                    onChange={this.handleChange}
                    className="postalInput"
                    />
          </Form.Group>
      </Form.Row>

          <FormGroup controlId="postal_code" >
            <FormLabel>Postal Code</FormLabel>
                <Form.Control
                    autoFocus
                    type="text"
                    value={this.state.postal_code}
                    onChange={this.handleChange}
                    className="postalInput"
                    />
          </FormGroup>


          <FormGroup controlId="password">
            <FormLabel>Change Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <FormGroup controlId="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
            
            <Row>
                <Col sm="6">
                <Button
                    block
                    className = "button is-link"
                    variant="outline-secondary"
                    onClick={e=>this.props.edit()}
                    >
                    Cancel
                </Button>
                </Col>

                <Col sm="6">
                <Button
                    block
                    className = "button is-link"
                    type="submit"
                    disabled= {!this.validateForm()}
                    onClick={e=>this.handleSubmit(e)}
                    >
                    Save Changes
                </Button> 
                </Col>


            </Row>
          

        </Form>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
    );
    }
}