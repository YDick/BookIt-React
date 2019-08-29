import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import Link from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Book Clubs</Nav.Link>
          <Nav.Link href="/">Profile</Nav.Link>
          {/* if loged in: */}
          {sessionStorage.length === 0 && (
            <Nav.Link href="login">Sign In</Nav.Link>
          )}
          {sessionStorage.length === 0 && (
            <Nav.Link href="signup">Sign Up</Nav.Link>
          )}
          {/* if loged out: */}
          {sessionStorage.length === 1 && (
            <Nav.Link href="/">Sign Out </Nav.Link>
          )}
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
