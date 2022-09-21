import React, { useState } from "react";
import logo from "../img/logo1.png";
// import Image1 from "../img/game-image.jpg";
import "../page/Navbar.css";
import "../../App.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { style } from "@mui/system";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" dark bgColor="dark" style={{ fontSize: "2rem" }}>
      <MDBContainer fluid> <MDBNavbarLink active aria-current="page" href="/">
        <img src={logo} style={{ width: "90px" }} className="logo"/></MDBNavbarLink>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Featured Tournament</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBNavbarLink
            href="/Login"
            tabIndex={-1}
            aria-disabled="true"
            className="login"
          >
            Login
          </MDBNavbarLink>
          <MDBNavbarLink
            href="/signup"
            tabIndex={-1}
            aria-disabled="true"
            className="login"
          >
            Signup
          </MDBNavbarLink>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
