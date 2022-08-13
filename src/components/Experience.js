import React from "react";
import { Timeline, Event } from "react-timeline-scribble";
import { Fade } from "react-awesome-reveal";
function Experience() {
  return (
    <>
      <div
        className="container d-flex exp px-4 align-items-center"
        style={{ fontSize: "0.55rem", height: "80vh" }}>
        <div className="experiences-wrapper col-md-4">
          <Fade direction="left">
            <h1
              data-aos="fade-right"
              className="mont mb-4"
              style={{ color: "black" }}>
              My <span style={{ color: "rgb(85, 136, 255)" }}>Experience</span>
            </h1>
          </Fade>
        </div>
        <div
          data-aos="zoom-in-down"
          className="timeline-wrapper col-md-8 d-flex justify-content-center align-items-center">
          <Fade
            direction="up"
            className="timeline"
            style={{ fontSize: "0.7rem" }}>
            <Timeline>
              <Event
                interval={"Apr-Aug 2022"}
                title={"React Developer Intern"}
                subtitle={"Neelitech"}>
                Developed a Payroll Automation Software. Contributed in
                frontend, feature functionality and logic building.
              </Event>
              <Event
                interval={"2020-2024"}
                title={"B.E. Information Science and Engineering"}
                subtitle={"NMIT, Bangalore: CGPA-9.11 (Upto 4th sem)"}></Event>
              <Event
                interval={"Mar 2020"}
                title={"12th-ISC Board"}
                subtitle={"Vidya Niketan School - 91%"}></Event>
              <Event
                interval={"Oct-Nov 2019"}
                title={"Head of Information Technology"}
                subtitle={"Bangalore Model United Nations"}>
                Various Roles like social media handle, designing of posters and
                certificates.
                <br />
                Other roles included managing Registrations and Trailer making
              </Event>
            </Timeline>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Experience;
