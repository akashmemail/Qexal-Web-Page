import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import "./home.css";
import Service from "../../Screen/service/service";
import Fetcher from "../../Screen/ourFetcher/fetcher";
import Build from "../../Screen/BuildDrem/build";
import Pricing from "../../Screen/pricingPlan/pricing";
import Team from "../../Screen/Temamember/team";
import Ourblog from "../../Screen/ourblog/ourblog";
import Join from "../../Screen/JOIN/join";
import Contect from "../../Screen/CONTECT/contect";
import Footer from "../../Screen/FOOTER/footer";

function Home() {
  return (
    <Row xs={1} md={1} className="g-4 ">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col
          key={idx}
          className="imagehome  d-flex justify-content-around justify-content-center align-items-center bg-primary "
        >
          <Card className="bg-primary  text-light">
            <Card.Body>
              <Card.Title className="homeheding">
                Optimize Your <br />
                Service Business
              </Card.Title>
              <Card.Text>
                Nemo enim ipsam voluptatem quia voluptas sit aut aspernatut
                <br /> aut fugit sed quia consequuntur magni dolores ratione
                voluptatem nesciunt.
              </Card.Text>
            </Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="primary"
                className=" homebtn2    bg-body text-black  "
              >
                Get Started
              </Button>
              <Button className="homebtn3">
                <i className="fa-regular fa-circle-play"></i> Watch the Video!
              </Button>
            </div>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="http://qexal.react.themesbrand.com/static/media/hero-1-img.fc99709bf09049723294.png"
            />
          </Card>
          <div>
            <div class="custom-shape-divider-bottom-1792909548">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </Col>
      ))}
      <Service />
      <Fetcher />
      <Build />
      <Pricing />
      <Team />
      <Ourblog />
      <Join />
      <Contect />
      <Footer />
    </Row>
  );
}

export default Home;
