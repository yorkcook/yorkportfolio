import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      {/* <a class="navbar-brand" href="/">
        <h1 class="display-1 text-success">
          <u>York Cook</u>
        </h1>
      </a> */}
      <div
        class="d-flex nav justify-content-around"
        style={{ fontFamily: "arial" }}
      >
        <a class="navbar-brand" href="/">
          <h1 class="display-1 text-success">
            {/* <u>York Cook</u> */}
            York Cook
          </h1>
        </a>
        <Navbar expand="lg" sticky="top">
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
                {/* <Nav.Link>
                  <Link to="/courses">
                    <Button variant="outline-success">
                      Continuing Education
                    </Button>
                  </Link>
                </Nav.Link> */}
                {/* <Nav.Link href="/contact">
              <Button variant="outline-success">Contact</Button>
            </Nav.Link> */}
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
