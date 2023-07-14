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
          <MDBCollapse
            navbar
            show={showBasic}
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>
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
            <MDBBtn
              outline
              className="py-1 "
              onClick={saveFile}
              style={{
                color: "rgb(100, 255, 218)",
                borderColor: "rgb(100, 255, 218)",
                minWidth: "20%",
              }}>
              Download Resume
            </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Nav;
