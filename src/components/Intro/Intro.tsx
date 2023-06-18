import * as React from "react";
import { Col, Container, Row, Button, Badge } from "react-bootstrap";
import { Navbar } from "../NavBar/NavBar";
import "./styles.css";
import { TypeWriter } from "./Typewriter";
import {
  BsGithub,
  BsLinkedin,
  BsTelegram,
  BsCloudDownloadFill,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IconButton } from "../IconButton/IconButton";

const Intro: React.FC = () => {
  return (
    <>
      <Container fluid className="p-0 intro d-flex flex-column">
        <Row className="m-0">
          <Col className="p-0">
            <Navbar></Navbar>
          </Col>
        </Row>
        <Row className="m-0 gy-4 clouds vh-100">
          <Col className="lorem m-3">
            <p className="greeting">Welcome, I'm</p>
            <div>
              <h1 className="rainbow">Reylan Lugo</h1>
            </div>
            <TypeWriter />
            <p>
              I'm a software developer based in Maracaibo, Venezuela, and I
              specialize in creating custom, scalable software solutions for
              businesses and end-users.
              <br />
            </p>
            <Container className="">
              <Row className="mt-3">
                <Col lg={1} className="p-0">
                  <Button href="https://github.com/reylanlugo" variant="icon">
                    <BsGithub />
                  </Button>
                </Col>
                <Col lg={1} className="p-0">
                  <Button
                    href="https://www.linkedin.com/in/reylanlugo/"
                    variant="icon"
                  >
                    <BsLinkedin />
                  </Button>
                </Col>
                <Col lg={1} className="p-0 ms-right">
                  <Button href="https://t.me/reylanlugo" variant="icon">
                    <BsTelegram />
                  </Button>
                </Col>
                <Col md={{ offset: 5 }} className="p-0">
                  <Button href="mailto:JQhIv@example.com" variant="mail">
                    <Badge bg="secondary" className="p-2">
                      clockr13@gmail.com
                    </Badge>
                    <GrMail />
                  </Button>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={{ offset: 0 }} className="p-0">
                  <Button variant="download">
                    <BsCloudDownloadFill />
                    &nbsp; Download C.V
                  </Button>
                </Col>
              </Row>
              
            </Container>
          </Col>
          <Col xs={0}>
            <img
              src="/vec1.png"
              alt="logo"
              className="img-fluid introvector"
            />
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export { Intro };
