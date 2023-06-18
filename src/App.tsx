import { Intro } from "./components/Intro/Intro";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

import "./App.css";
import { Navbar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <div className="slider">
        <div className="slide">
          <Intro />
        </div>
        <div className="slide">
          <Skills />
        </div>
        <div className="slide">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
