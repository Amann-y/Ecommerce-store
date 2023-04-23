import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <>
      <Container
        className="w-100 d-flex flex-column  align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <Row>
          <Col>
            <Spinner animation="border" variant="primary" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loader;
