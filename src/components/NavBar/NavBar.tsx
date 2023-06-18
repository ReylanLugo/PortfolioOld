import * as React from "react";
import { Navbar as Navi, Container, NavDropdown, Nav } from "react-bootstrap";
import "./styles.css";

const Navbar: React.FC = () => {
  return (
    <>
      <Navi fixed="top" expand="sm" className="bg-transparent color-primary">
        <Container>
          <Navi.Brand href="#home">
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            R E Y L A N
          </Navi.Brand>
          <Navi.Toggle aria-controls="basic-navbar-nav" />
          <Navi.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#me">About me</Nav.Link>
              <Nav.Link 
              href="#projects">Projects</Nav.Link>
            </Nav>
          </Navi.Collapse>
        </Container>
      </Navi>
    </>
  );
};

export { Navbar };
