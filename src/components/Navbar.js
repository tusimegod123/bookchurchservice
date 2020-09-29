import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

import "../nav.css"

export default function Navigation() {

    return (
      <>
        <Navbar collapseOnSelect expand="lg" id="navbar" fixed="top">
          <Navbar.Brand href="/" id="navbar">
            Ibada
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" id="navbar">
                About us
              </Nav.Link>
              <Nav.Link href="#pricing" id="navbar">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets" id="navbar">
                +256701398916
              </Nav.Link> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br></br>
        <br></br>
      </>
    );

}