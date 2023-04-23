import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { getCartTotal, getAllCarts } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import { getUserDetails } from "../store/userSlice";

const NavbarComp = () => {
  const carts = useSelector(getAllCarts);
  const dispatch = useDispatch();

  const userDetails = useSelector(getUserDetails);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>Amann E-comm Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link eventKey="1">
                <Link to="/" className="nav-link text-warning">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link eventKey="1">
                <Link to="/cart" className="nav-link text-primary">
                  Cart
                  {carts && carts.length && carts.length > 0 ? (
                    <Badge bg="info" className="ms-1">
                      {carts.length}
                    </Badge>
                  ) : (
                    ""
                  )}
                </Link>
              </Nav.Link>

              <Nav.Link eventKey="2">
                {userDetails && userDetails.id && userDetails.id !== "" ? (
                  <Link className="nav-link" to="/user">
                    {userDetails.firstName}
                  </Link>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
