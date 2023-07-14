import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";
import { SiGmail } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import connect from "../images/connect.svg";
import { Fade, JackInTheBox } from "react-awesome-reveal";
import Spinner from "./Spinner";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [alert, setAlert] = useState("");
  let [loading, setLoading] = useState(false);
  return (
    <>
      <div
        className="container d-flex contact px-4 align-items-center justify-content-center"
        style={{ height: "80vh" }}>
        <JackInTheBox style={{ width: "55%" }} className="left-contact">
          <div
            data-aos="fade-right"
            className="contact-left"
            style={{ width: "100%", color: "black" }}>
            <img src={connect} style={{ width: "60%" }} alt="" />
            <h1 className="mont">
              Let's <span style={{ color: "rgb(125, 18, 255)" }}>Connect!</span>
            </h1>
            <p className="text2" style={{ color: "gray", fontSize: "large" }}>
              Need something made, or just have a question? Hit me up, and lets
              connect!
            </p>
          </div>
        </JackInTheBox>
        <div
          data-aos="fade-left"
          className="contact-right d-flex flex-column align-items-center justify-content-center"
          style={{ width: "45%" }}>
          <Fade
            direction="right"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}>
            <div
              className="alert alert-success"
              style={{ display: alert === "success" ? "block" : "none" }}
              role="alert">
              Thank you. You will be contacted shortly.
            </div>
            <div
              className="spin"
              style={{ display: loading ? "block" : "none" }}>
              <Spinner />
            </div>
            <div
              className="alert alert-danger"
              style={{ display: alert === "failure" ? "block" : "none" }}
              role="alert">
              Something went wrong. Try again Later.
            </div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
              }}
              onSubmit={async (values, { resetForm }) => {
                console.log(values);
                setLoading(true);
                const contactCollectionRef = collection(db, "contact");
                try {
                  // const rawResponse = await fetch(
                  //   "http://localhost:5000/api/contact",
                  //   {
                  //     method: "POST",
                  //     headers: {
                  //       "Content-Type": "application/json",
                  //     },
                  //     body: JSON.stringify(values),
                  //   }
                  // );
                  // console.log("resp ", rawResponse);
                  // const content = await rawResponse.json();
                  // console.log(content);
                  // throw new Error("Bleh");
                  const rawResponse = await addDoc(
                    contactCollectionRef,
                    values
                  );

                  if (rawResponse) {
                    setAlert("success");
                    setLoading(false);
                    setTimeout(() => {
                      setAlert("");
                      resetForm();
                    }, 3000);
                  }
                } catch (error) {
                  setLoading(false);
                  setAlert("failure");
                  setTimeout(() => {
                    setAlert("");
                    // resetForm();
                  }, 3000);
                }
              }}>
              {() => (
                <Form className="d-flex flex-column" style={{ width: "65%" }}>
                  <MDBInputGroup
                    textBefore="Full Name"
                    className="mb-3"
                    style={{ width: "100%" }}>
                    <Field
                      className="form-control"
                      required
                      name="name"
                      type="text"
                      placeholder="What can I call you?"
                    />
                  </MDBInputGroup>
                  <MDBInputGroup
                    textBefore="Email"
                    className="mb-3"
                    style={{ width: "100%" }}>
                    <Field
                      className="form-control"
                      required
                      name="email"
                      type="email"
                      placeholder="Don't worry I wont share it"
                    />
                  </MDBInputGroup>
                  <MDBInputGroup className="mb-3" size="lg">
                    <Field
                      className="form-control"
                      as="textarea"
                      required
                      name="message"
                      placeholder="How can I help?"
                      style={{ width: "50%" }}
                    />
                  </MDBInputGroup>
                  <MDBBtn
                    type="submit"
                    style={{
                      color: "white",
                      backgroundColor: "rgb(125, 18, 255)",
                    }}>
                    Connect!
                  </MDBBtn>
                </Form>
              )}
            </Formik>
            <p className="my-3 mont">OR</p>
            <div
              data-aos="fade-right"
              className="socials d-flex align-items-center mx-auto">
              <MDBBtn
                tag="a"
                color="none"
                className="m-3"
                target="_blank"
                href="mailto:vedantshah2001@gmail.com"
                style={{ color: "#dd4b39", fontSize: "1.3rem" }}>
                <SiGmail />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-3"
                target="_blank"
                href="https://github.com/vedant-shah"
                style={{ color: "rgb(22, 27, 34)" }}>
                <DiGithubBadge style={{ fontSize: "1.75rem" }} />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-3"
                target="_blank"
                href="https://www.linkedin.com/in/vedant-shah2001/"
                style={{ color: "#0082ca" }}>
                <MDBIcon fab icon="linkedin-in" size="lg" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-3"
                target="_blank"
                href="https://mobile.twitter.com/vedantshah2001"
                style={{ color: "#55acee" }}>
                <MDBIcon fab icon="twitter" size="lg" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-3"
                target="_blank"
                href="https://wa.me/919035642584"
                style={{ color: "#25d366" }}>
                <MDBIcon fab icon="whatsapp" size="lg" />
              </MDBBtn>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Contact;
