

import React from "react";
import { Nav, Container, Navbar, NavItem, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from './books.svg'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Crimson 
  render() {
    return (
      <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
        <LinkContainer style={{ color: "#A9A9A9" }} to="/home">
          <Navbar.Brand>
              <img width="45"
        height="45" src={Logo} className="d-inline-block align-top"/>
          </Navbar.Brand>
          {/* <img
        src={Logo}
        
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}
        </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ">
          <LinkContainer  to="/home">
            <Nav.Link active={false}>Home </Nav.Link>
            {/* <Button> HOme</Button> */}
          </LinkContainer>
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <LinkContainer to="/bookclubs">
            <Nav.Link active={false}>Book Clubs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link active={false}>Profile </Nav.Link>
          </LinkContainer>
          {/* if logged out: */}
          {sessionStorage.length === 0 && (
            <LinkContainer to="/login">
              <Nav.Link active={false}>Log in</Nav.Link>
            </LinkContainer>
          )}
          {sessionStorage.length === 0 && (
            <LinkContainer to="/signup">
              <Nav.Link active={false}>Sign up </Nav.Link>
            </LinkContainer>
          )}
          {/* If logged in */}
          {sessionStorage.length === 1 && (
            <Nav.Link href="/">Sign Out </Nav.Link>
          )}

        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
