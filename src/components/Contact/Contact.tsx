import * as React from "react";
import "./styles.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { MdAccessTimeFilled, MdEmail, MdLocationPin } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <>
      <Container fluid className="contact">
        <Row>
          <Col md={{ offset: 1, span: 3 }} className="mt-5 info">
            <h4>Reylan Lugo</h4>
            <p>
              <MdLocationPin /> Venezuela
            </p>
            <p>
              <MdEmail /> clockr13@gmail.com
            </p>
            <p>
              <BsFillTelephoneInboundFill /> +58 311 234 567
            </p>
            <p>
              <MdAccessTimeFilled /> 3:57 PM
            </p>
          </Col>
          <Col className="mt-4" md={{ offset: 0, span: 4 }}>
            <Form>
              <Row><h3>Contact</h3></Row>
              <Row>

                <Col>
                
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Subject"
                      className="mb-3"
                    >
                      <Form.Select aria-label="Default select example">
                        <option value="1">a Job</option>
                        <option value="2">Services</option>
                        <option value="3">Consulting</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Check
                inline
                label="Subscribe to newsletter"
                name="group1"
                id={`inline-`}
              />
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
          <Col md={{ offset: 1, span: 2 }} className="mt-4 subsform">
            <h4>Subscripe to me for updates</h4>
            <p>
              You will receive updates from me of new projects and new blogs
            </p>
            <Form >
              <Form.Control type="email" placeholder="Enter email" />
              <Button className="mt-3" variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { Contact };
