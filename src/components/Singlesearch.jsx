import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
} from "../store/searchSlice";

const Singlesearch = () => {
  const { searchkey } = useParams();
  const dispatch = useDispatch();
  const { searchProducts, loading } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchAsyncSearchProduct(searchkey));
  }, [searchkey]);
  return (
    <>
      <Container>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            searchProducts.map((ele, ind) => {
              return (
                <Col sm={4} className="my-2 text-center">
                  <Link key={ele.id} to={`/product/${ele.id}`}>
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
                  </Link>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
};

export default Singlesearch;
