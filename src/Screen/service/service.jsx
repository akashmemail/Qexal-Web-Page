import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import karna na bhulein

const Service = () => {
  return (
    // 1. Main Container (Puray page ko center aur padding dene ke liye)
    <Container className="py-5" id="service">
      {/* 2. Upar Ka Text Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 fw-bold mt-5">Our Services</h1>
          <p className="lead text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium <br /> doloremque laudantum totam rem ab illo inventore.
          </p>
        </Col>
      </Row>

      {/* 3. Niche Ka 3 Cards Section */}
      <Row className="g-4">
        {" "}
        {/* g-4 se cards ke beech me barabar gap aayega */}
        {/* Card 1 */}
        <Col md={4} sm={12}>
          {" "}
          {/* md={4} ka matlab badi screen par 3 card dikhenge (12/4 = 3) */}
          <Card className="h-100 shadow-sm">
            {" "}
            {/* h-100 se sabhi cards ki height barabar rahegi */}
            <Card.Body style={{ textAlign: "center" }}>
              <div style={{ textAlign: "center", fontSize: "3rem" }}>
                <i class="fa-solid fa-box-open"></i>
              </div>
              <Card.Title>Digital Design</Card.Title>
              <Card.Text>
                At vero eos et accusamus et iusto odio <br />
                dignissimos ducimus <br /> qui blanditiis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 2 */}
        <Col md={4} sm={12}>
          <Card className="h-100 shadow-sm">
            <Card.Body style={{ textAlign: "center" }}>
              <div style={{ textAlign: "center", fontSize: "3rem" }}>
                <i class="fa-solid fa-box-open"></i>
              </div>
              <Card.Title>Awesome Support</Card.Title>
              <Card.Text>
                Ut enim ad minima veniam, quis nostrum <br />
                exercitationem ullam <br />
                corporis suscipit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 3 */}
        <Col md={4} sm={12}>
          <Card className="h-100 shadow-sm  ">
            <Card.Body style={{ textAlign: "center" }}>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "3rem",
                }}
              >
                <i class="fa-solid fa-box-open"></i>
              </div>
              <Card.Title>Easy to customize</Card.Title>
              <Card.Text>
                Sed ut perspiciatis unde omnis iste natus <br /> error sit
                volupatem <br /> doloremque.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;
