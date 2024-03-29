import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiJavascript1, DiJava } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb, SiExpress, SiNextdotjs, SiMysql } from "react-icons/si";

function Skills() {
  const saveFile = async () => {
    const url = "/Vedant's_Resume.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Vedant's_Resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
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
                style={{ height: "30vh", width: "30vw" }}>
                <h2 className="mont text-light">Confident</h2>
              </div>
            </Fade>
            <Fade direction="right">
              <div
                data-aos="fade-left"
                className="familiar-wrapper-1-right d-flex  justify-content-around align-items-center  "
                style={{ fontSize: "4rem", width: "65vw", height: "30vh" }}>
                <div className="d-flex flex-column align-items-center">
                  <FaReact style={{ color: "#61DBFB" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "#61DBFB" }}>
                    ReactJS
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <DiJavascript1 style={{ color: "#f7df1e" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "#f7df1e" }}>
                    Javascript
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <SiMysql style={{ color: "#d88604" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "#d88604" }}>
                    SQL
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <DiJava style={{ color: "#0c83bd" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "#0c83bd " }}>
                    Java
                  </span>
                </div>
              </div>
            </Fade>
          </div>
          <div className="familiar-wrapper-2 d-flex w-100">
            <Fade direction="left">
              <div
                data-aos="fade-left"
                className="familiar-wrapper-2-left d-flex justify-content-center align-items-center "
                style={{ height: "30vh", width: "30vw" }}>
                <h2 className="mont text-light">Familiar</h2>
              </div>
            </Fade>
            <Fade direction="right">
              <div
                data-aos="fade-right"
                className="familiar-wrapper-2-right d-flex  justify-content-around align-items-center  "
                style={{ fontSize: "4rem", width: "65vw", height: "30vh" }}>
                <div className="d-flex flex-column align-items-center">
                  <SiMongodb style={{ color: "#3FA037" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "#3FA037" }}>
                    MongoDB
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <SiExpress style={{ color: "red" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "red" }}>
                    ExpressJS
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <FaNodeJs style={{ color: "#68A063" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "#68A063" }}>
                    NodeJS
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <SiNextdotjs style={{ color: "#ffff" }} />
                  <span
                    className="pt-2"
                    style={{ fontSize: "0.75rem", color: "#ffff" }}>
                    NextJS
                  </span>
                </div>
              </div>
            </Fade>
          </div>
        </div>
        <p style={{ color: "ghostwhite" }}>
          More Skills on my{" "}
          <span
            onClick={saveFile}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "rgb(5, 255, 161)",
            }}>
            Resume
          </span>
          !
        </p>
      </div>
    </>
  );
}

export default Skills;
