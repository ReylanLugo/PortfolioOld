import * as React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from "react-terminal-ui";
import { motion } from "framer-motion";
import ConsoleHeader from "./ConsoleHeader";

interface Props {
  toggle: boolean;
}

const Console: React.FC<Props> = ({ toggle }) => {
  type output = string | JSX.Element;

  const [terminalData, setTerminalData] = React.useState<output[]>([
    <ConsoleHeader />,
  ]);

  const entryNewOutput = (output: output) => {
    let Response: output = <TerminalOutput>Unrecognized command</TerminalOutput>;
    if (output === "-help") {
      Response = (
        <TerminalOutput>
          <>
            <TerminalInput>-help</TerminalInput>
            <p>List of commands</p>
            <p>'-data' show user data information</p>
            <p>'-skills' displets the list of skills</p>
            <p>'-projects' show user projects</p>
            <p>'clear' clear console</p>
          </>
        </TerminalOutput>
      );
    } else if (output === "clear") {
      return setTerminalData([<ConsoleHeader />]);
    } else if (output === "-skills") {
      Response = (
        <TerminalOutput>
          <>
          <TerminalInput>-skills</TerminalInput>
          <p>List of skills</p>
          <p>==============================</p>
          <p>Web Development (HTML5, CSS, JavaScript, React, etc.)</p>
          <p>Node.js --- Express.js</p>
          <p>Databases: MongoDB, MySQL, PostgreSQL</p>
          <p>TypeScript (Vue.js, React.js)</p>
          <p>Python: Django, TensorFlow</p>
          </>
        </TerminalOutput>
      );
    } else if (output === '-data') {
      Response = (
        <TerminalOutput>
          <>
          <TerminalInput>-data</TerminalInput>
          <p>User data</p>
          <p>==============================</p>
          <p>Name: Reylan Lugo         Age: 23</p>
          <p>Address: Venezuela, Latin America</p>
          <p>Experience: 2 years without freelancing</p>
          <p>Email: clockr13@gmail.com</p>
          <p>Phone: +58 311 234 567</p>
          </>
        </TerminalOutput>
      )
    } else if (output === "-projects") {
      Response = (
        <TerminalOutput>
          <>
          <TerminalInput>-projects</TerminalInput>
          <p>34 repositories in github</p>
          <p>Link: <a href="https://github.com/ReylanLugo">https://github.com/ReylanLugo</a></p>
          <p>Continue scrolling down to see more projects</p>
          </>
        </TerminalOutput>
      );
    } 
    setTerminalData([...terminalData, Response])

  };

  return (
    <Container id="me" fluid className="console">
      <Row>
        <Col className="meinfo" md={{ offset: 2, span: 8 }}>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Terminal
                name="CONSOLE"
                colorMode={ColorMode.Dark}
                onInput={entryNewOutput}
                height="450px"
              >
                {terminalData}
              </Terminal>
            </motion.div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Console;
