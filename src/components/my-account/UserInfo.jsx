import React, { Component } from "react";
import { Button, FormGroup, FormLabel, Col, Row, Form, Image } from "react-bootstrap";
import "./UserInfo.css"

export default class UserInfo extends Component {
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
            edit: false
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


    render()  {
        return (
      <div className="Signup">
          <h1>My Account</h1>

        <Image src={this.state.gravatar} alt="" rounded />

        <Form>
        <FormGroup as={Row} controlId="name">
            <FormLabel column sm="4">Name</FormLabel>
            <Col sm="8">
            {this.state.edit ? 
                (<Form.Control
                    autoFocus
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />)
                :
                    (<Form.Control
                    readOnly
                    autoFocus
                    plaintext
                    type="text"
                    value={this.state.name}
                />)
            }
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
            {this.state.edit ? 
                (<Form.Control
                    autoFocus
                    type="text"
                    value={this.state.address_line1}
                    onChange={this.handleChange}
                    />)
                :
                    (<Form.Control
                    readOnly
                    autoFocus
                    plaintext
                    type="text"
                    value={this.state.address_line1}
                />)
            }
            </Col>
          </FormGroup>

      <Form.Row>
          <Form.Group controlId="city" as={Col}>
            <Form.Label>City</Form.Label>
              <Form.Control
                    readOnly
                    autoFocus
                    plaintext
                    className="postalInput"
                    type="text"
                    value={this.state.city}

                />
          </Form.Group>

          <Form.Group controlId="province" as={Col}>
            <Form.Label>Province</Form.Label>
              <Form.Control
                    readOnly
                    autoFocus
                    plaintext
                    type="text"
                    value={this.state.province}
                    className="postalInput"
                />
          </Form.Group>


          <Form.Group controlId="country" as={Col}>
            <Form.Label>Country</Form.Label>
              <Form.Control
                    readOnly
                    autoFocus
                    plaintext
                    className="postalInput"
                    type="text"
                    value={this.state.country}
                />
          </Form.Group>
      </Form.Row>

          <FormGroup controlId="postal_code" >
            <FormLabel>Postal Code</FormLabel>
                    <Form.Control
                    readOnly
                    autoFocus
                    plaintext
                    className="postalInput"
                    type="text"
                    value={this.state.postal_code}
                />
          </FormGroup>
            

              <Button
                block
                className = "button is-link"
                onClick={e=>this.props.edit()}
              >
                Edit
              </Button>

        </Form>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
  
        )
      }
}