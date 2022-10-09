import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavbarComponent() {
  return (
     
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>Picture-Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
            to='/'
            as={NavLink} 
            className={({isActive})=> (isActive ? "active" : "")}>
              Photos
              </Nav.Link>
            <Nav.Link to="/aboutus" as={NavLink}>AboutUs</Nav.Link>
            <Nav.Link to="/contactus" as={NavLink}>ContactUs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="/signUp" as={NavLink}>SignUp</Nav.Link>
            <Nav.Link to="/login" as={NavLink}> LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

);
}

export default NavbarComponent
