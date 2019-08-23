import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


// https://flaviocopes.com/react-forms/


export default function Signup(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChangeName = e => {
        setName(e.target.value)
      }


    const handleChangeEmail = e => {
        setEmail(e.target.value)
      }

    const handleChangePassword = e => {
        setPassword(e.target.value)
      }

    const handleSubmit = event => {
        event.preventDefault()

        // fetch("http://book-it.herokuapp.com/api/v1/user_token",{
        //     method: 'POST',
        //     body:
        //     JSON.stringify(
        //     {"auth": this.state}
        //     ),
        //     headers:{
        //       'Content-Type': 'application/json'
        //     }
        //   }).then(e=>e.json())
        //   .then(data=> {
        //       console.log('Success:', data);
        //       sessionStorage.setItem("JWT", JSON.stringify(data));
        //     })
        //   .catch(error=>console.error('Error:', error));
        // }
      }




    return (
      <div className="Signup">
          <h1>Sign Up Here!</h1>

        <form onSubmit={handleSubmit}>

        <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChangeName}
            />
          </FormGroup>

          <FormGroup controlId="email" >
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
          </FormGroup>

          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
              type="password"
            />
          </FormGroup>
          <Button
            block
            type="submit"
          >
            Sign Up!
          </Button>
        </form>

      </div>
    );
}
