import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div class="d-flex nav justify-content-around">
      <Navbar expand="lg" sticky="top">
        {/* <Navbar.Brand class="border border-primary" href="/">
          York Cook
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div>
            <Nav className="mr-auto">
              <Nav.Link href="/">
                <Button variant="outline-success">Home</Button>
              </Nav.Link>
              <Nav.Link>
                <Link to="/portfolio">
                  <Button variant="outline-success">Portfolio</Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="/courses">
                <Button variant="outline-success">Continuing Education</Button>
              </Nav.Link>
              {/* <Nav.Link href="/contact">
              <Button variant="outline-success">Contact</Button>
            </Nav.Link> */}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
