import * as React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "./styles.css";
const Blogs: React.FC = () => {
  const _plugins = [new Arrow(), new Fade()];
  return (
    <div id="blogs" className="blogs">
      <Container>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <Row>
          <Col>
            <div className="box-title">
              <h2 style={{}}>Lastest Blogpost</h2>
            </div>
          </Col>
          <Col md={{ offset: 0, span: 8 }}>
            <Flicking defaultIndex={0} renderOnlyVisible={true} circular={true} plugins={_plugins}>
              <Card className="w-50 me-3 h-100">
                <Card.Img
                  variant="top"
                  src="https://i.blogs.es/3c9351/brooke-cagle-tlg2hcpitze-unsplash/1366_2000.webp"
                />
                <Card.Body>
                  <Card.Title className="fs-3">
                    Scaling Your Development Team: Best Practices for Managing
                    Large Projects
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Read more</Button>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="w-50 me-3 h-100">
                <Card.Img
                  variant="top"
                  src="https://i.blogs.es/07bd3b/james-harrison-vpoexr5wmr4-unsplash/1366_2000.webp"
                />
                <Card.Body>
                  <Card.Title className="fs-3">
                    Introduction to Test-Driven Development (TDD)
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Read more</Button>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="w-50 me-3 h-100">
                <Card.Img
                  variant="top"
                  src="https://i.blogs.es/4ad4f9/code-g88ca44645_1280/1366_2000.webp"
                />
                <Card.Body>
                  <Card.Title className="fs-3">
                    10 Tips for Writing Clean and Maintainable Code
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Read more</Button>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="w-50 me-3 h-100">
                <Card.Img
                  variant="top"
                  src="https://i.blogs.es/3c9351/brooke-cagle-tlg2hcpitze-unsplash/1366_2000.webp"
                />
                <Card.Body>
                  <Card.Title className="fs-3">
                    Introduction to Test-Driven Development (TDD)
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Read more</Button>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="w-50 me-3 h-100">
                <Card.Img
                  variant="top"
                  src="https://i.blogs.es/3c9351/brooke-cagle-tlg2hcpitze-unsplash/1366_2000.webp"
                />
                <Card.Body>
                  <Card.Title className="fs-3">
                    Introduction to Test-Driven Development (TDD)
                  </Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Read more</Button>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <ViewportSlot>
                <span className="flicking-arrow-prev is-circle"></span>
                <span className="flicking-arrow-next is-circle"></span>
              </ViewportSlot>
            </Flicking>
          </Col>

          {/* <Col md={{ offset: 0, span: 4 }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://hebertdev.pythonanywhere.com/media/blog/iPad_Pro_12.9__-_1.png"
              />
              <Card.Body>
                <Card.Title>JavaScript Fundamentals: A Beginner's Guide to Building Dynamic Web Applications</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ offset: 0, span: 4 }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://hebertdev.pythonanywhere.com/media/blog/iPad_Pro_12.9__-_1.png"
              />
              <Card.Body>
                <Card.Title>JavaScript Fundamentals: A Beginner's Guide to Building Dynamic Web Applications</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={{ offset: 0, span: 4 }}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://hebertdev.pythonanywhere.com/media/blog/iPad_Pro_12.9__-_1.png"
              />
              <Card.Body>
                <Card.Title>Mastering CSS: Tips and Tricks for Beautiful Web Design</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export { Blogs };
