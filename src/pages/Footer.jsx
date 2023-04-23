import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        className="myFooter mt-2 py-1"
        style={{ backgroundColor: "#222" }}
      >
        <Container>
          <Row>
            <Col className="col-12">
              <h3 className="text-white">Follow us :- </h3>
              <p className="text-white">
                Get in Touch Don't Forget to Follow me on all Social Network
              </p>
              <div className="">
                <ul className="socialIconsList d-flex align-items-center justify-content-evenly g-1">
                  <li className="facebook">
                    <a
                      rel="noreferrer"
                      href="https://amann-y.netlify.app/"
                      target="_blank"
                    >
                      <BsFacebook />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a
                      rel="noreferrer"
                      href="https://amann-y.netlify.app/"
                      target="_blank"
                    >
                      <BsLinkedin />
                    </a>
                  </li>
                  <li className="twitter">
                    <a
                      rel="noreferrer"
                      href="https://amann-y.netlify.app/"
                      target="_blank"
                    >
                      <BsTwitter />
                    </a>
                  </li>
                  <li className="stackover">
                    <a
                      rel="noreferrer"
                      href="https://amann-y.netlify.app/"
                      target="_blank"
                    >
                      <BsStackOverflow />
                    </a>
                  </li>
                  <li className="blogGoogle">
                    <a
                      rel="noreferrer"
                      href="https://amann-y.netlify.app/"
                      target="_blank"
                    >
                      <BsGoogle />
                    </a>
                  </li>
                  <li className="github">
                    <a
                      rel="noreferrer"
                      href="https://amann-y.netlify.app/"
                      target="_blank"
                    >
                      <BsGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-12">
              <div className="footerCopyright">
                <small className="text-danger">
                  © Copyright protected & reserved , 2023. Developed and
                  Designed by{" "}
                  <a
                    href="https://amann-y.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-white fs-4">Amann</span>
                  </a>
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
