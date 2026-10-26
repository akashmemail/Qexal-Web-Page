import React from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import karna na bhulein

function Join() {
  return (
    // text-center se sab kuch beech me (center) ho jayega
    // mt-5 se upar se thoda space (margin-top) milega
    <Container
      className="text-center mt-5 text-bg-primary p-5 w-75 "
      id="Contactus"
    >
      {/* Uper me Heading Text */}
      <h1 className="mb-4 mt-5">Jon our Growing Community</h1>
      <h1 style={{ fontSize: "1rem" }}>
        Far far away, behind the wored mountains, far from the countries vokalia
        nad consonantia, ther live the blind texts.
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
        Sing Up for free
      </Button>
    </Container>
  );
}

export default Join;
