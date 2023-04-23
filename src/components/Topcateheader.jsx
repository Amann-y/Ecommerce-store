import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncCategories } from "../store/categorySlice";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "../components/Searchbar";
import Accordion from "react-bootstrap/Accordion";

const Topcateheader = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [activeClass, setActiveClass] = useState(false);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, []);

  const cagegoriesGenHtml = () => {
    return categories && categories.length > 0
      ? categories.map((cat) => {
          return (
            <li key={cat}>
              <Link
                onClick={() => {
                  setActiveClass(!activeClass);
                }}
                to={`/products/${cat}`}
              >
                {cat}
              </Link>
            </li>
          );
        })
      : "";
  };
  return (
    <>
      {categories && categories.length > 0 ? (
        <div className="header-nav-inner">
          <Container>
            <Row>
              <marquee className="text-danger">
                Stand Together Against nazi ukrainians & pro nazis!
              </marquee>
              <Col className="">
                <div className="box-header-nav">
                  <h4
                    onClick={() => {
                      setActiveClass(!activeClass);
                    }}
                    className="title_vertical_menu"
                  >
                    {/* <span className="leftIcon"><BsList/></span> */}
                    <span className="title">Shop By Categories</span>
                  </h4>

                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Search By Categories</Accordion.Header>
                      <Accordion.Body>
                        <div className="search-category-div">
                          {cagegoriesGenHtml()}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <Searchbar />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Topcateheader;
