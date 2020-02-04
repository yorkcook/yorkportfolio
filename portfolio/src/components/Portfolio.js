import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import Picture from "./image.png";
import Water from "./water.png";
import Labby from "./labby.png";
import Recipe from "./recipe.png";
import Soup from "./soup.png";

const Portfolio = () => {
  return (
    <div>
      <div
        class="container"
        style={{ marginBottom: "25px", marginTop: "50px", fontFamily: "arial" }}
      >
        <div class="row mt-5">
          <div class="col-md">
            {" "}
            <Card>
              <div class="card">
                <a href="https://lambda-labby.netlify.com/" target="_blank">
                  <img
                    src={Labby}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "550px", height: "500px" }}
                  ></img>
                </a>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://lambda-labby.netlify.com/"
                  target="_blank"
                >
                  <Card.Title class="text-success font-weight-bold">
                    <h3>
                      <u>Labby</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "white" }}>
                <Button
                  variant="outline-success"
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
                <a href="https://recipe-vault.netlify.com/" target="_blank">
                  <img
                    src={Recipe}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "550px", height: "500px" }}
                  ></img>
                </a>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://recipe-vault.netlify.com/"
                  target="_blank"
                >
                  <Card.Title class="text-success font-weight-bold">
                    <h3>
                      <u>Recipe Vault</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "white" }}>
                <Button
                  variant="outline-success"
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
          <div class="col-sm">
            {" "}
            <Card>
              <div class="card">
                <a href="https://we-serve-soup.netlify.com/" target="_blank">
                  <img
                    src={Soup}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "550px", height: "500px" }}
                  ></img>
                </a>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://we-serve-soup.netlify.com/"
                  target="_blank"
                >
                  <Card.Title class="text-success font-weight-bold">
                    <h3>
                      <u>We Serve Soup</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "white" }}>
                <Button
                  variant="outline-success"
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
                <a
                  href="https://watermyplants-html.netlify.com/"
                  target="_blank"
                >
                  <img
                    src={Water}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "550px", height: "500px" }}
                  ></img>
                </a>
              </div>
              <Card.Body>
                <Nav.Link
                  href="https://watermyplants-html.netlify.com/"
                  target="_blank"
                >
                  <Card.Title class="text-success font-weight-bold">
                    <h3>
                      <u>Water My Plants</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "white" }}>
                <Button
                  variant="outline-success"
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
