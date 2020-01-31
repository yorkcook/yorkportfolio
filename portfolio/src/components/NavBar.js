import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

// import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div class="mx-auto" style={{ margin: "150px" }}>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="/">York Cook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://festive-banach-4b3dbb.netlify.com/portfolio">
                <Button variant="outline-success">Portfolio</Button>
              </Nav.Link>
              <Nav.Link href="/courses">
                <Button variant="outline-success">Courses</Button>
              </Nav.Link>
              {/* <Nav.Link href="/contact">
              <Button variant="outline-success">Contact</Button>
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
