import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

const Searchbar = () => {
  const navigate = useNavigate();
  let elemSearch = useRef("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    let searchValue = elemSearch.current.value;
    navigate(`/search/${searchValue.trim()}`);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handlerSubmit} className="searchProducts">
              <div className="d-flex align-items-center">
                <Form.Control
                  ref={elemSearch}
                  type="text"
                  placeholder="Search for products ..."
                />
                <Button variant="primary" type="submit" className="ms-1">
                  <span className="submitIcon">
                    <BsSearch />
                  </span>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Searchbar;
