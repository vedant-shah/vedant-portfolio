import React from "react";
// import { Timeline, Event } from "react-timeline-scribble";
import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";
import { Fade } from "react-awesome-reveal";
function Experience() {
  const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: "#141414!important",
      color: "#ffffff",
    },
    date: {
      backgroundColor: "  rgba(0,0,0,0)",
    },
    marker: {
      borderColor: "#FFCC55",
      backgroundColor: "#000",
    },
    timelineTrack: {
      backgroundColor: "rgb(85, 136, 255)",
    },
  });
  return (
    <>
      <div
        className="container d-flex exp px-4 align-items-center justify-content-center"
        style={{ fontSize: "0.55rem", height: "100vh" }}>
        <div className="experiences-wrapper col-md-4">
          <Fade direction="left">
            <h1
              data-aos="fade-right"
              className="mont mb-4"
              style={{ color: "whitesmoke" }}>
              My <span style={{ color: "rgb(85, 136, 255)" }}>Experience</span>
            </h1>
          </Fade>
        </div>
        <div className="timeline-wrapper col-md-8 d-flex justify-content-center align-items-center">
          <Fade direction="up" className="timeline" cascade>
            <Timeline theme={customTheme}>
              <Events style={{ fontSize: "0.65rem" }} id="events">
                <TextEvent
                  date="Apr 2022 - Mar 2023"
                  text="Software Developer Intern @ *Neelitech*  
                Developed multiple business oriented Software. Contributed in
                frontend, features, functionality and logic building."
                />

                <TextEvent
                  date="2020-2024"
                  text="B.E. Information Science and Engineering**  
                *NMIT, Bangalore*  

                9.11 CGPA (Upto 4th sem)  
                "
                />
                <TextEvent
                  date="Mar 2020"
                  text="12th-ISC Board  
                *Vidya Niketan School*  
                91% : PCMC
                "
                />
                <TextEvent
                  date="Oct-Nov 2019"
                  text="Head of Information Technology  
                *Bangalore Model United Nations*  
                Various Roles like Social Media Handle, Registration Management, Designing of Posters and
                Certificates.
                "
                />
                <TextEvent
                  date="Apr 2019"
                  text="Summer Intern  
                *Ramaiah University of Applied Sciences*  
                Developed a working prototype of a UGV. The solution provided a base for further advancemets in the defence industry.
                "
                />
              </Events>
            </Timeline>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Experience;
