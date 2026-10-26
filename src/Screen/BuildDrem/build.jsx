import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import karna na bhulein

function Build() {
  return (
    // text-center se sab kuch beech me (center) ho jayega
    // mt-5 se upar se thoda space (margin-top) milega
    <Container className="text-center mt-5 text-bg-primary p-5">
      {/* Uper me Heading Text */}
      <h1 className="mb-4 mt-5">Build your dream website today</h1>
      <h1 style={{ fontSize: "1rem" }}>
        Sed perspiciatis unde ominis iste natus error sit voluptatem accusantium{" "}
        <br />
        doloremquie laudantium totamrem aperiam eaque <br /> inventore veritaits
        quasi.
      </h1>

      {/* Niche me Button */}
      <Button
        variant="light"
        size="lg"
        style={{
          marginTop: "50px",
          width: "300px",
          padding: "15px",
          color: "blue",
        }}
      >
        Ask for Demonstration
      </Button>
    </Container>
  );
}

export default Build;
