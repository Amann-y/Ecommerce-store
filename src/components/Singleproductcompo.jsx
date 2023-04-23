import React from "react";
import Loader from "../components/Loader";
import { Col, Container, Row } from "react-bootstrap";

const Singleproductcompo = ({ category, loading, cat }) => {
  return (
    <Container className="my-2">
      <Row style={{ backgroundColor: "#B3C99C" }}>
        <h2 style={{ color: "#FC2947" }}>{cat}</h2>
        <hr className="fw-bold" />
        {loading ? (
          <Loader />
        ) : (
          category &&
          category.map((ele, ind) => {
            return (
              <Col sm={4} className="my-2 text-center">
                <div
                  className="px-1 d-flex flex-column align-items-center shadow-lg my-hero-div p-3 mb-5 bg-body rounded"
                  style={{ backgroundColor: "#E4DCCF" }}
                >
                  <img
                    src={ele.images[0]}
                    alt="pic"
                    className="img-fluid"
                    style={{ height: "14rem" }}
                  />
                  <h6>{ele.title}</h6>
                  <p>{ele.category}</p>
                  <h6>Brand : {ele.brand}</h6>
                  <h6 className="bg-secondary p-1 w-100">
                    {ele.discountPercentage}
                    <span>% Off</span>
                  </h6>
                  <h6 className="bg-success p-1 w-100">
                    <span>₹</span>
                    {ele.price}
                  </h6>
                </div>
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default Singleproductcompo;
