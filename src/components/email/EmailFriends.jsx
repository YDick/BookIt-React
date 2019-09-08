import React from 'react';
import { Button, FormGroup, FormLabel, Col, Form } from "react-bootstrap";

export default class Email extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sender: '',
            recipientName: '',
            recipientEmail: "",
            message: ''
        }
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      validateForm() {
        return (
          this.state.recipientEmail.length > 0 &&
          this.state.recipientEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        );
      }

      handleSubmit = event => {
        event.preventDefault();

        fetch("http://book-it.herokuapp.com/api/v1/invite",{
            method: 'POST',
            body:
            JSON.stringify(
              {"user":  {               
                "recipientEmail": this.state.recipientEmail,
                "recipientName": this.state.recipientName,
                "message": this.state.message,
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
              // eslint-disable-next-line eqeqeq
              if(data.email == 'has already been taken'){
                alert('email'+data.email)
              }
            })
          .catch(error=>console.error('Error:', error));
        }



    render()  {

        return(
            <React.Fragment>
                <h1>Invite your friends!</h1>

                <Form onSubmit={this.handleSubmit}>
                    
                <FormGroup controlId="recipientName" as={Col}>
                    <FormLabel>Friend's Name</FormLabel>
                    <Form.Control
                            readOnly
                            autoFocus
                            plaintext
                            type="text"
                            value={this.state.recipientName}
                            onChange={this.handleChange}
                        />
                </FormGroup>

                <FormGroup controlId="recipientEmail" as={Col}>
                    <FormLabel>Friend's Email</FormLabel>
                    <Form.Control
                            readOnly
                            autoFocus
                            plaintext
                            type="text"
                            value={this.state.recipientEmail}
                            onChange={this.handleChange}
                        />
                </FormGroup>

                <FormGroup controlId="message" as={Col}>
                    <FormLabel>Message</FormLabel>
                    <Form.Control
                            readOnly
                            autoFocus
                            plaintext
                            type="text"
                            placeholder="Add a personal note! (optional)"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                </FormGroup>

                <Button
                    block
                    disabled={!this.validateForm()}
                    type="submit"
                    className = "button is-link"
                >
                    Send!
                </Button> 
                </Form>

                
            </React.Fragment>
        )
    }

}