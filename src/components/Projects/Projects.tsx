import * as React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import "./styles.css";
import { Cursor } from "react-simple-typewriter";
import { FaGithubAlt } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { ConsoleTitle } from "../ConsoleTitle/ConsoleTitle";

const Projects: React.FC = () => {
  return (
    <>
      <Container id="projects" className="projects d-flex" >
        <Row className="menu">
          <Col xs={12} md={{ offset: 0, span: 5 }}>
            <ConsoleTitle text="PROJECTS" />
            <ListGroup defaultActiveKey="#link2">
              <ListGroup.Item action href="#me">
                &gt; Blid CRM
                <div className="skill-badge">
                  <Badge bg="primary">React</Badge>
                  <Badge bg="black">TypeScript</Badge>
                </div>
                <div className="triangle"></div>
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                &gt; Trusth Academy
                <div className="skill-badge">
                  <Badge bg="blue">Vue.js</Badge>
                  <Badge bg="violet">Python</Badge>
                </div>
                <div className="triangle"></div>
              </ListGroup.Item>
              <ListGroup.Item action href="#link3" variant="link" eventKey={3}>
                &gt; Flitzer
                <div className="skill-badge">
                  <Badge bg="green">DJango</Badge>
                  <Badge bg="primary">React</Badge>
                </div>
                <div className="triangle"></div>
              </ListGroup.Item>
              <ListGroup.Item action href="#link3" variant="link" eventKey={1}>
                &gt; Montriets
                <div className="skill-badge">
                  <Badge bg="success">NodeJS</Badge>
                </div>
                <div className="triangle"></div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={{ offset: 0, span: 7 }} className="center d-flex p-5">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Blind CRM</Card.Title>
                <Card.Text>
                  Optimiza la gestión de estudiantes: gestionar fácilmente la
                  información de tus estudiantes, realizar seguimiento.
                </Card.Text>
                <Button
                  href="https://blid-crm.herokuapp.com/"
                  variant="primary"
                >
                  <FaGithubAlt />
                </Button>
                <Button
                  href="https://blid-crm.herokuapp.com/"
                  variant="primary"
                >
                  <BsCodeSlash />
                </Button>
              </Card.Body>
              <Card.Img
                alt="Card image"
                variant="bottom"
                src="https://picsum.photos/200/300/?blur"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Projects };
