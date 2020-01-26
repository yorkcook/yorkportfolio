import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <div>
      <Navbar class="mb-200px" bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">York Cook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/portfolio">
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
  );
};

export default NavBar;
