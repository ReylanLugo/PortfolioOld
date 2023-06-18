import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import { Cursor } from "react-simple-typewriter";
import { ConsoleTitle } from "../ConsoleTitle/ConsoleTitle";

const Skills: React.FC = () => {
  return (
    <Container id="me" fluid className="skills">
      <Row md={12}>
        <Col md={{offset: 2}}>
          <ConsoleTitle text="ABOUT ME" />
        </Col>
      </Row>
      <Row>
        <Col md={{ offset: 2 }}><p>
        Saludos, me especializo en el desarrollo de productos web y móviles con más de 6 años de experiencia.<br /><br />

Me apasiona crear contenido digital que habite en Internet, ya sean sitios web, aplicaciones u otras soluciones en línea. Mi objetivo principal es diseñar productos que ofrezcan experiencias de alto rendimiento, innovadoras y prácticas.<br /><br />

Además, contribuyo activamente a la comunidad del desarrollo a través de mi blog personal, GeekDark. En este espacio, comparto temas relevantes del mundo del desarrollo con el objetivo de brindar ayuda y conocimiento a otros profesionales.<br /><br />

Aquí hay algunas tecnologías con las que he estado trabajando recientemente:<br /> <br />
            </p></Col>
            <Col
              >asdasdasdasdas</Col>
      </Row>
    </Container>
  );
};

export { Skills };
