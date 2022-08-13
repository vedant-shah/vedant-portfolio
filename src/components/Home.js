import React from "react";
import { Fade } from "react-awesome-reveal";
import { MDBBtn } from "mdb-react-ui-kit";

function Home(props) {
  return (
    <>
      <div
        className="container d-flex flex-column align-items-start justify-content-center px-3"
        id="main-container">
        <Fade cascade duration={500}>
          <h1 data-aos="fade-right" className="main-page-title">
            Hi, I'm Vedant.
          </h1>
          <h1 data-aos="fade-right" className="main-page-title-2">
            I develop things for the{" "}
            <span style={{ color: "rgb(100, 255, 218)" }}> web</span>.
          </h1>
          <p
            data-aos="fade-right"
            className="main-para md-w-50 my-4"
            style={{ fontSize: "1.1rem", color: "gray" }}>
            I'm a full stack developer and an Information Science and
            Engineering Student, based in Bengaluru, India. I build{" "}
            <span style={{ color: "rgb(100, 255, 218)" }}>sites</span> and{" "}
            <span style={{ color: "rgb(100, 255, 218)" }}>software</span> based
            on the <span style={{ color: "rgb(100, 255, 218)" }}> web</span>.
          </p>

          <MDBBtn
            data-aos="fade-right"
            outline
            style={{
              color: "rgb(100, 255, 218)",
              borderColor: "rgb(100, 255, 218)",
            }}
            className="w-sm-50 w-md-20"
            onClick={() => {
              props.fullpageApi.moveTo(6);
            }}>
            Get In Touch
          </MDBBtn>
        </Fade>
      </div>
    </>
  );
}

export default Home;
