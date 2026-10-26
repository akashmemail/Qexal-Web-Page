import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import karna na bhoolen
import "./fetcher.css";
function Fetcher() {
  return (
    <Container className="mt-5" id="Features">
      {/* Upar Me Text (Header Section) */}
      <Row className="text-center mb-5">
        <Col>
          <h1>Our Features</h1>
          <p className="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusntum doloreqmque <br /> laudantum totam rem ab illo iventore.
          </p>
        </Col>
      </Row>

      {/* Niche Me 2 Card aur uske niche 2 Card (Grid Section) */}
      {/* Pehli Row: 2 Cards */}
      <Row className="mb-4">
        <Col md={6} className="mb-3 mb-md-0">
          <Card className="h-100  shadow-sm border-0">
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                }}
              >
                Perfect Solution For Small <br /> Businesses
              </Card.Title>
              <Card.Text style={{ marginTop: "50px" }}>
                Sed ut perspicaitis unde omnis iste natus error sit voluptatem{" "}
                <br />
                accusantum doloremque laudantium totam rem aperiam eaqueipsa{" "}
                <br />
                quae ab illo inventor veritatis..
              </Card.Text>
              <div style={{ marginTop: "40px" }}>
                <button className="bg-primary text-light fw-bold p-2">
                  Find out more <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 w-50 shadow-sm border-0">
            <div className="fetcherImages">
              <img
                src="http://qexal.react.themesbrand.com/static/media/features-1.4a4e437de3430b09d0d7.jpg"
                alt=""
              />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Dusri Row: Niche ke 2 Cards */}
      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <Card className="h-100 w-50  shadow-sm border-0">
            <div className="fetcherImages">
              <img
                src="http://qexal.react.themesbrand.com/static/media/features-2.ecafb1c20fdd1737ae62.jpg"
                alt=""
              />
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100  shadow-sm border-0">
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                }}
              >
                Build community & conversion <br /> with our suite of social
                tool
              </Card.Title>
              <Card.Text style={{ marginTop: "30px" }}>
                Sed ut perspiciatis unde omnis iste natus error sit
                <br />
                voluptatem accusantium doloremque laudantium totam rem
                <br />
                aperiam eaque ipsa quae ab illo inventore veritatis..
              </Card.Text>
              <div style={{ marginTop: "40px" }}>
                <button className="bg-primary text-light fw-bold p-2">
                  Find out more <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Fetcher;
