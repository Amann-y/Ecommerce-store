import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCategoryProducts } from "../store/categorySlice";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Products = () => {
  const { catId } = useParams();
  const dispatch = useDispatch();
  const { categoryproduct, loading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryProducts(catId));
  }, [catId]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            {loading ? (
              <Loader />
            ) : (
              categoryproduct.products &&
              categoryproduct.products.map((ele, ind) => {
                return (
                  <Col sm={4} className="my-2 text-center">
                    <Link key={ele.id} to={`/product/${ele.id}`}>
                      <div
                        className="d-flex align-items-center flex-column py-1 rounded"
                        style={{ backgroundColor: "#FDE2F3" }}
                      >
                        <img
                          src={ele.images[0]}
                          alt="pic"
                          className="img-fluid"
                          style={{ maxWidth: "10rem" }}
                        />
                        <div>
                          <h4>Brand : {ele.brand}</h4>
                          <p>Description : {ele.description}</p>
                          <h6>
                            <span>{ele.discountPercentage}</span>% off
                          </h6>
                          <h5>Price : ₹ {ele.price}</h5>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Products;
