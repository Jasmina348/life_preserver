import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap';

import logo from '../static/images/LifePreserver.png'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#home" className="me-auto">
            <img
              alt=""
              src={logo}
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
