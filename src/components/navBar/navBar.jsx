import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "./books.svg";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Logout = () => {
    sessionStorage.clear();
    this.props.logOut();
  };

  render() {
    return (
      <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
        <LinkContainer style={{ color: "#A9A9A9" }} to="/home">
          <Navbar.Brand>
          
            <img
              width="45"
              height="45"
              src={Logo}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </LinkContainer>
         <LinkContainer style={{ color: "#A9A9A9" }} to="/home">
        <Navbar.Brand >
          {"Book It"}
          </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            
          <LinkContainer to="/aboutus">
              <Nav.Link active={false}>About us </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/home">
              <Nav.Link active={false}>Home </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/MyClubs">
              <Nav.Link active={false}>Clubs</Nav.Link>
            </LinkContainer>

            

            {/* if logged out: */}
            {!sessionStorage.JWT && (
              <LinkContainer to="/login">
                <Nav.Link active={false}>Log in</Nav.Link>
              </LinkContainer>
            )}
            {!sessionStorage.JWT && (
              <LinkContainer to="/signup">
                <Nav.Link active={false}>Sign up </Nav.Link>
              </LinkContainer>
            )}
            {/* If logged in */}
            {sessionStorage.JWT && (
              <LinkContainer to="/signOut">
                <Nav.Link active={false} onClick={e => this.Logout()}>
                  Sign Out{" "}
                </Nav.Link>
              </LinkContainer>
            )}

            {sessionStorage.JWT && (
              <LinkContainer to="/MyAccount">
                <Nav.Link active={false}>
                  My Account
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
