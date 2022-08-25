import React from "react";
import download from "downloadjs";
import pfp from "../images/pfp.jpg";
import { Fade } from "react-awesome-reveal";
import { MDBBtn } from "mdb-react-ui-kit";

function About() {
  const saveFile = async () => {
    const res = await fetch("http://localhost:5000/download/resume");
    const blob = await res.blob();
    download(blob, "Vedant-Shah-Resume.pdf");
  };
  return (
    <>
      <div
        className="container d-flex flex-column align-items-center justify-content-center px-4"
        id="about-container">
        <div className="about-wrapper-left col-md-6 d-flex flex-column my-5">
          <Fade
            direction="left"
            style={{
              display: "flex",
              flexDirection: "column",
            }}>
            <h1 data-aos="fade-right" className="text-light mont about my-3">
              About <span style={{ color: "rgb(224, 0, 133)" }}> Me </span>
            </h1>
            <p data-aos="fade-right" className="text-light">
              Hi, I'm Vedant. I've always been the geeky tech enthusiast and
              through my passion for coding, I've learnt to explore new
              technologies in the world of the web. Keeping the experience of a
              user as the highest priority, I can develop websites and web
              software.
              <br /> <br />I enjoy connecting the dots: be it ideas from
              different disciplines, people from different teams, or
              applications from different industries.
            </p>
            <MDBBtn
              outline
              className="my-3"
              onClick={saveFile}
              style={{
                color: "rgb(224, 0, 133)",
                borderColor: "rgb(224, 0, 133)",
                width: "45%",
              }}>
              Download Resume
            </MDBBtn>
          </Fade>
        </div>
        <div
          className="about-wrapper-right"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}>
          <Fade direction="right">
            <div
              data-aos="fade-up"
              className="img-wrapper"
              style={{
                border: "3px solid rgb(224, 0, 133)",
                borderRadius: "0.25rem",
              }}>
              <img
                src={pfp}
                alt=""
                style={{
                  height: "335px",
                  position: "relative",
                  right: "20px",
                  bottom: "20px",
                }}
                className="rounded pfp hover-shadow"
              />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default About;
