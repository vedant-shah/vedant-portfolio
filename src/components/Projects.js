import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Slide } from "react-awesome-reveal";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { DiGithubBadge } from "react-icons/di";
function Projects() {
  const projectArray = [
    {
      name: "Mern Inn",
      github: "https://github.com/vedant-shah/MERN-Inn",
      hosting: "https://mern-inn.herokuapp.com/",
      description:
        "MERN Inn is a state of the art, responsive holiday booking faciltiy, It is a Full Stack project. It requires users to sign up/in to continue to booking page, where they can check their previous bookings or book a new holiday. There is a feature to download the invoice any previous booking as a PDF.",
      stack: " ReactJs • NodeJs • MongoDB",
    },
    {
      name: "Watch This Next",
      github: "https://github.com/vedant-shah/Watch-This-Next",
      hosting: "https://watch-this-next.netlify.app/",
      description:
        "Introducing watch-this-next, a snappy modern tool to easily get movie or tv show recommendations. Chose from the top, popular, now playing categories, or answer few simple questions and let us recommend a movie/tv show specially for you!",
      stack: " NextJs • ReactJs • MaterialUI",
    },
    {
      name: "Weather App",
      github: "https://github.com/vedant-shah/weather-app",
      hosting: "https://weather-app-vedant-shah.netlify.app/",
      description:
        "This weather app shows the live weather data of 200000+ cities and countries. User can search for city/country name in the search bar.",
      stack: " Javascript • Bootstrap5",
    },
  ];
  return (
    <>
      <div
        className="container d-flex flex-column px-4 align-items-center justify-content-center"
        style={{ height: "80vh" }}>
        <Slide direction="down">
          <h1 data-aos="fade-down" className="my-2 mont">
            My <span style={{ color: "rgb(100, 255, 218)" }}>Projects</span>
          </h1>
        </Slide>
        <div className="container mt-5 mb-3" style={{ overflowY: "auto" }}>
          <Slide>
            <div className="row" data-aos="zoom-in">
              {projectArray.map((element) => (
                <div className="col-md-4" key={element.name}>
                  <div
                    className="card p-3 d-flex justify-content-between mb-2"
                    style={{ height: "90%" }}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                          {" "}
                          <BsFileEarmarkCodeFill
                            style={{ color: "rgb(100, 255, 218)" }}
                          />{" "}
                        </div>
                        <div className="ms-2 c-details">
                          <h6
                            className="mb-0"
                            style={{ color: "rgb(204, 214, 246)" }}>
                            {element.name}
                          </h6>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center"
                        style={{ fontSize: "5rem!important" }}>
                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          target="_blank"
                          href={`${element.github}`}
                          style={{ color: "rgb(100, 255, 218)" }}>
                          <DiGithubBadge style={{ fontSize: "1.5rem" }} />
                        </MDBBtn>
                        <a
                          rel="noreferrer"
                          href={`${element.hosting}`}
                          target="_blank"
                          style={{ color: "rgb(100, 255, 218)" }}>
                          <BiLinkExternal />
                        </a>
                      </div>
                    </div>
                    <div className="mt-">
                      <p
                        className=""
                        style={{
                          fontSize: "0.8rem",
                          color: "rgb(136, 146, 176)",
                        }}>
                        {element.description}
                      </p>
                    </div>
                    <div className="my">
                      <div
                        className="my-2 text1"
                        style={{
                          fontFamily: "'Ubuntu Mono', monospace",
                          color: "rgb(204, 214, 246)",
                        }}>
                        {element.stack}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Slide>
        </div>
        <Slide direction="up">
          <a
            href="https://github.com/vedant-shah?tab=repositories"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgb(100, 255, 218)", fontSize: "4rem" }}>
            <span style={{ color: "rgb(204, 214, 246)", fontSize: "1.5rem" }}>
              Find more on
            </span>{" "}
            <DiGithubBadge />
          </a>
        </Slide>
      </div>
    </>
  );
}

export default Projects;
