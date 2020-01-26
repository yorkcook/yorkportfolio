import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/portfolio">
              <a href="" target="_blank" rel="noopener noreferrer">
                <MdEmail size="25px" />
              </a>
            </Nav.Link>
            <Nav.Link href="/courses">
              <a
                href="https://github.com/yorkcook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size="25px" />
              </a>
            </Nav.Link>
            <Nav.Link href="/contact">
              <a
                href="https://twitter.com/rockybalbitcoin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size="25px" />
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">York Cook</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
