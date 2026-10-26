import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import karna na bhulein

const Team = () => {
  return (
    // 1. Main Container (Puray page ko center aur padding dene ke liye)
    <Container className="py-5" id="team">
      {/* 2. Upar Ka Text Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4  mt-5">Our Team Members</h1>
          <p className="lead text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium <br /> doloremque laudantum totam rem ab illo inventore.
          </p>
        </Col>
      </Row>

      {/* 3. Niche Ka 3 Cards Section */}
      <Row
        className="g-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {" "}
        {/* g-4 se cards ke beech me barabar gap aayega */}
        {/* Card 1 */}
        <Col md={2} sm={3}>
          {" "}
          {/* md={4} ka matlab badi screen par 3 card dikhenge (12/4 = 3) */}
          <Card className="h-100 shadow-sm">
            {" "}
            {/* h-100 se sabhi cards ki height barabar rahegi */}
            <Card.Body style={{ textAlign: "center" }}>
              <div>
                <img
                  style={{ width: "200px" }}
                  src="http://qexal.react.themesbrand.com/static/media/1.271c781cd5d41a071889.jpg"
                  alt=""
                />
              </div>
              <Card.Title>Frances Thompson</Card.Title>
              <Card.Text>Developer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 2 */}
        <Col md={2} sm={3}>
          <Card className="h-100 shadow-sm">
            <Card.Body style={{ textAlign: "center" }}>
              <div>
                <img
                  style={{ width: "200px" }}
                  src="http://qexal.react.themesbrand.com/static/media/2.590a54cc9867854bbd8e.jpg"
                  alt=""
                />
              </div>
              <Card.Title>John jones</Card.Title>
              <Card.Text>CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 3 */}
        <Col md={2} sm={3}>
          <Card className="h-100 shadow-sm  ">
            <Card.Body style={{ textAlign: "center" }}>
              <div>
                <img
                  style={{ width: "200px" }}
                  src="http://qexal.react.themesbrand.com/static/media/3.79a09cf6445efdab72e2.jpg"
                  alt=""
                />
              </div>
              <Card.Title>Della Hobbs</Card.Title>
              <Card.Text>DESIGNER</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} sm={3}>
          <Card className="h-100 shadow-sm  ">
            <Card.Body style={{ textAlign: "center" }}>
              <div>
                <img
                  style={{ width: "200px" }}
                  src="http://qexal.react.themesbrand.com/static/media/4.e1928138c01816dea9a4.jpg"
                  alt=""
                />
              </div>
              <Card.Title>TROY Jordon</Card.Title>
              <Card.Text>DEVELOPER</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
