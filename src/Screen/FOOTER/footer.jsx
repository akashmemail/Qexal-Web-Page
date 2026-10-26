import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className=" text-white pt-5 pb-4 mt-auto"
      style={{ backgroundColor: "#29344A" }}
    >
      <Container>
        <Row className="text-center text-md-start">
          {/* Column 1: Brand Info */}
          <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Qexal
            </h5>
            <p>
              At vero eos et accusmus et iusto odio dignissimos ducimus qui
              blanditiis praesentum voluptatum deleniti.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={2} lg={2} xl={2} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Customer
            </h5>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                works
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Strategy
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Release
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Press
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Mission
              </a>
            </p>
          </Col>

          {/* Column 3: Contact */}
          <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Product
            </h5>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Tranding
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Popular
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Customers
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Features
              </a>
            </p>
          </Col>
          <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Information
            </h5>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Develpers
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Support
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Customer Service
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Get Strated
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Gide
              </a>
            </p>
          </Col>
          <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Support
            </h5>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                FAQ
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Contact
              </a>
            </p>
            <p>
              <a href="#/" className="text-white text-decoration-none">
                Disscusion
              </a>
            </p>
          </Col>

          {/* Column 4: Newsletter */}
        </Row>

        <hr className="mb-4 mt-4" />

        {/* Bottom Bar: Copyright and Legal Links */}
        <Row className="align-items-center">
          <Col md={7} lg={8} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Copyright:
              <a
                href="https://yourwebsite.com"
                className="text-warning text-decoration-none ms-1"
              >
                YourCompany.com
              </a>
            </p>
          </Col>
          <Col md={5} lg={4} className="text-center text-md-end mt-2 mt-md-0">
            <a href="#/" className="text-white text-decoration-none me-3">
              Privacy Policy
            </a>
            <a href="#/" className="text-white text-decoration-none">
              Terms of Service
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
