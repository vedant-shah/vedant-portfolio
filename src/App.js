import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const anchors = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

const App = () => {
  return (
    <>
      <Nav />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        navigat
        sectionsColor={[
          "#000",
          "#141414",
          "#141d26",
          "#000",
          "#000",
          "rgb(231, 239, 246)",
        ]}
        onLeave={(origin, destination, direction) => {
          // console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          // console.log("render prop change", state, fullpageApi);

          return (
            <div>
              <div className="section">
                <Home fullpageApi={fullpageApi} />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Skills />
              </div>
              <div className="section">
                <Experience />
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <Contact />
              </div>
            </div>
          );
        }}
      />
    </>
  );
};
export default App;
