import { Fade, Perspective } from "@egjs/flicking-plugins";
import Flicking, {
  ChangedEvent,
} from "@egjs/react-flicking";
import * as React from "react";
import {  Col } from "react-bootstrap";
import { BsCodeSlash, BsFillFileCodeFill, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

import "./styles.css";

interface Props {
  FlickingRef: React.RefObject<Flicking>;
  setIndex: (index: number) => void;
  toggle: boolean;
}

const CardProject: React.FC<Props> = ({ FlickingRef, setIndex, toggle }) => {
  const plugins = [new Perspective({ rotate: 0.8, scale: 1.5 }), new Fade()];
  const handlemove = (e: ChangedEvent<Flicking>) => {
    console.log(e.currentTarget.index);
    setIndex(e.currentTarget.index);
  };
  // React.useEffect(() => {
  //     if (FlickingRef.current) {
  //         const index = FlickingRef.current.index;
  //         setIndex(index);
  //         console.log(FlickingRef.current.control.activeIndex);

  //     }
  // },[FlickingRef.current?.control.activeIndex]);
  return (
    <Col xs={12} md={{ offset: 0, span: 12 }} lg={7} className="center cards-list">
      {toggle && (
        <motion.div
          initial={{ opacity: 0,  x: -100 }}
          animate={{ opacity: 1,  x: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Flicking
            ref={FlickingRef}
            plugins={plugins}
            onChanged={handlemove}
            circular
          >
            <div className="card-panel">
              <img src="https://picsum.photos/200/300/?blur" />
              <h3>Blind CRM</h3>
              <p>
                Optimiza la gestión de estudiantes: gestionar fácilmente la
                información de tus estudiantes, realizar seguimiento.
              </p>
              <div className="btn-group">
                <button className="me-2">
                  <BsCodeSlash />
                </button>
                <button>
                  <BsGithub />
                </button>
              </div>
            </div>
            <div className="card-panel">
              <img src="https://picsum.photos/100/300/?blur" />
              <h3>Trusth Academy</h3>
              <p>
                Trabajé en el desarrollo de un gestor de estudiantes. la
                plataforma que permitiera a los administradores manejar y
                organizar la información de los estudiantes de manera eficiente.
              </p>
              <div className="btn-group">
                <button className="me-2">
                  <BsCodeSlash />
                </button>
                <button>
                  <BsGithub />
                </button>
              </div>
            </div>
            <div className="card-panel">
              <img src="https://picsum.photos/200/400/?blur" />
              <h3>Flitzer</h3>
              <p>
                Trabajé en el desarrollo de una tienda virtual para Basico
                Cloathes. El objetivo principal era crear una plataforma en
                línea que permitiera a los clientes comprar productos de manera
                fácil y segura.
              </p>
              <div className="btn-group">
                <button className="">
                  <BsFillFileCodeFill />
                </button>
                <button>
                  <BsGithub />
                </button>
              </div>
            </div>
            <div className="card-panel">
              <img src="https://picsum.photos/200/200/?blur" />
              <h3>Montriets</h3>
              <p>
                El objetivo principal era crear una identidad visual atractiva y
                coherente para la marca. Utilicé herramientas como [lista de
                herramientas utilizadas] para crear un diseño que reflejara los
                valores y la personalidad de la marca.
              </p>
              <div className="btn-group">
                <button className="me-2">
                  <BsCodeSlash />
                </button>
                <button>
                  <BsGithub />
                </button>
              </div>
            </div>
          </Flicking>
        </motion.div>
      )}
    </Col>
  );
};

export { CardProject };
