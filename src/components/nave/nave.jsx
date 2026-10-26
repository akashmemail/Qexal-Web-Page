import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nave.css";

function Navebar() {
  return (
    <Navbar bg="light" expand="lg" className="Navelink">
      <Container>
        {/* Left Side: Logo */}
        <Navbar.Brand href="/">
          {/* <img
            src=""
            alt="Logo"
            width="30"
            height="30"
            color="red"
            className="d-inline-block align-top me-2"
          /> */}
          <h1 style={{ color: "white" }}>Qexal</h1>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Right Side: Home, About, Price / Button */}
        <Navbar.Collapse id="basic-navbar-nav" className="NaveList">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="active-link">
              Home
            </Nav.Link>
            <Nav.Link href="#service" className="other-link">
              Servcices
            </Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
            <Nav.Link href="#price">Price</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Contactus">Contact Us</Nav.Link>
            <Nav.Item className="ms-lg-3">
              <Button variant="primary" href="#cta" className="navebtn">
                Buy Now
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;
