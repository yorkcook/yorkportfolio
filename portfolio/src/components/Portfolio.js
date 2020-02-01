import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import Picture from "./image.png";

const Portfolio = () => {
  return (
    <div>
      <div
        class="container"
        style={{ marginBottom: "25px", marginTop: "50px" }}
      >
        <div class="row mt-5">
          <div class="col">
            {" "}
            <Card>
              <div class="card">
                <img
                  src={Picture}
                  class="img-fluid"
                  alt="Responsive image"
                ></img>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://lambda-labby.netlify.com/"
                  target="_blank"
                >
                  <Card.Title>Labby</Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  href="https://github.com/yorkcook/be-recipe-vault"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Footer>
            </Card>
          </div>
          <div class="col">
            <Card>
              <div class="card">
                <img
                  src={Picture}
                  class="img-fluid"
                  alt="Responsive image"
                ></img>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://recipe-vault.netlify.com/"
                  target="_blank"
                >
                  <Card.Title>Recipe Vault</Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  href="https://github.com/yorkcook/be-recipe-vault"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            {" "}
            <Card>
              <div class="card">
                <img
                  src={Picture}
                  class="img-fluid"
                  alt="Responsive image"
                ></img>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://we-serve-soup.netlify.com/"
                  target="_blank"
                >
                  <Card.Title>We Serve Soup</Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  href="https://github.com/yorkcook/FE"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Footer>
            </Card>
          </div>
          <div class="col">
            {" "}
            <Card>
              <div class="card">
                <img
                  src={Picture}
                  class="img-fluid"
                  alt="Responsive image"
                ></img>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://watermyplants-html.netlify.com/"
                  target="_blank"
                >
                  <Card.Title>Water My Plants</Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="primary"
                  href="https://github.com/yorkcook/WEB-UI-III"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
