import React, { useState } from "react";
import download from "downloadjs";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  // MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";

function Nav() {
  const [showBasic, setShowBasic] = useState(false);
  const saveFile = async () => {
    const res = await fetch("http://localhost:5000/download/resume");
    const blob = await res.blob();
    download(blob, "Vedant-Shah-Resume.pdf");
  };
  return (
    <>
      <MDBNavbar
        expand="lg"
        fixed="top"
        dark
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand
            href="#Home"
            style={{ cursor: "pointer" }}
            className="brand ">
            Vedant Shah
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}>
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <MDBNavbarItem>
                <MDBNavbarLink
                  aria-current="page"
                  href="#About"
                  style={{ cursor: "pointer" }}>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#Skills" style={{ cursor: "pointer" }}>
                  Skills
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#Experience" style={{ cursor: "pointer" }}>
                  Experience
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#Projects" style={{ cursor: "pointer" }}>
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#Contact" style={{ cursor: "pointer" }}>
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBBtn
            outline
            onClick={saveFile}
            style={{
              color: "rgb(100, 255, 218)",
              borderColor: "rgb(100, 255, 218)",
            }}>
            Download Resume
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Nav;
