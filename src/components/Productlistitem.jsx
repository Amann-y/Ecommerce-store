import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

const Productlistitem = () => {
  const { loading, products } = useSelector((state) => state.product);

  return (
    <>
      <Container>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            products
              .filter((ele) => ele.id < 10)
              .map((ele, ind) => {
                return (
                  <Col sm={4} className="my-2 text-center">
                    <div>
                      <img
                        src={ele.images[0]}
                        alt="pic"
                        className="img-fluid"
                        style={{ height: "14rem" }}
                      />
                    </div>
                  </Col>
                );
              })
          )}
        </Row>
      </Container>
    </>
  );
};

export default Productlistitem;
