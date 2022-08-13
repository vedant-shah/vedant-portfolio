import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";

function Skills() {
  return (
    <>
      <div
        className="container d-flex flex-column align-items-center justify-content-center px-4"
        id="skills-container"
        style={{ height: "100vh" }}>
        <h1 data-aos="fade-down" className="mont text-light">
          My{" "}
          <span style={{ color: "rgb(5, 255, 161)", width: "100vw" }}>
            Skills
          </span>
        </h1>
        <div className="skills-content" style={{ width: "100vw" }}>
          <div className="familiar-wrapper-1 d-flex w-100">
            <Fade direction="left">
              <div
                data-aos="fade-right"
                className="familiar-wrapper-1-left d-flex justify-content-center align-items-center "
                style={{ height: "30vh", width: "35vw" }}>
                <h2 className="mont text-light">Confident</h2>
              </div>
            </Fade>
            <Fade direction="right">
              <div
                data-aos="fade-left"
                className="familiar-wrapper-1-right d-flex  justify-content-around align-items-center  "
                style={{ fontSize: "4rem", width: "65vw", height: "30vh" }}>
                <FaReact style={{ color: "#61DBFB" }} />
                <DiJavascript1 style={{ color: "#f7df1e" }} />
                <FaHtml5 style={{ color: "#F16529" }} />
                <IoLogoCss3 style={{ color: "#264de4" }} />
              </div>
            </Fade>
          </div>
          <div className="familiar-wrapper-2 d-flex w-100">
            <Fade direction="left">
              <div
                data-aos="fade-left"
                className="familiar-wrapper-2-left d-flex justify-content-center align-items-center "
                style={{ height: "30vh", width: "35vw" }}>
                <h2 className="mont text-light">Familiar</h2>
              </div>
            </Fade>
            <Fade direction="right">
              <div
                data-aos="fade-right"
                className="familiar-wrapper-2-right d-flex  justify-content-around align-items-center  "
                style={{ fontSize: "4rem", width: "65vw", height: "30vh" }}>
                <SiMongodb style={{ color: "#3FA037" }} />
                <SiExpress style={{ color: "red" }} />
                <FaNodeJs style={{ color: "#68A063" }} />
                <SiNextdotjs style={{ color: "#ffff" }} />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
