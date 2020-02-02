import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div class="container">
      <footer class="sticky-bottom h-3">
        <div class="d-flex justify-content-center h-2">
          <Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/contact">
                  <a
                    style={{ color: "#28a745" }}
                    href="https://www.linkedin.com/in/yorkcook/"
                    target="_blank"
                  >
                    <FaLinkedin size="25px" />
                  </a>
                </Nav.Link>
                <Nav.Link href="/portfolio">
                  <a style={{ color: "#28a745" }} href="" target="_blank">
                    <MdEmail size="25px" />
                  </a>
                </Nav.Link>
                <Nav.Link href="/courses">
                  <a
                    style={{ color: "#28a745" }}
                    href="https://github.com/yorkcook"
                    target="_blank"
                  >
                    <FaGithub size="25px" />
                  </a>
                </Nav.Link>
                <Nav.Link href="/contact">
                  <a
                    style={{ color: "#28a745" }}
                    href="https://twitter.com/rockybalbitcoin"
                    target="_blank"
                  >
                    <FaTwitter size="25px" />
                  </a>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
