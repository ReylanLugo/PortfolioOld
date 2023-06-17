import React from "react";
import { Button} from "react-bootstrap";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

const IconButton: React.FC = () => {
  return (
    <>
      
      <Button variant="icon">
        <a href="https://github.com/reylanlugo" target="_blank">
          <BsGithub />
        </a>
      </Button>
    </>
  );
};

export { IconButton };
