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
        <div class="row mt-5, ml-5">
          <div class="col-md">
            {" "}
            <Card style={{ width: "25rem" }}>
              <div class="card">
                <a href="https://lambda-labby.netlify.com/" target="_blank">
                  <img
                    src={Labby}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "450px", height: "400px" }}
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
                      <u>LABBY</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  Labby automated the process of assigning incoming Lambda
                  students to their Labs teams, saving Lambda over 100 staff
                  hours. It was built using Node.js, AWS, and a Postgres
                  database.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ backgroundColor: "white" }}>
                <Button
                  variant="outline-success"
                  href="https://github.com/yorkcook/labby-be"
                  target="_blank"
                >
                  GitHub
                </Button>
              </Card.Footer>
            </Card>
          </div>
          <div class="col">
            <Card style={{ width: "25rem" }}>
              <div class="card">
                <a href="https://recipe-vault.netlify.com/" target="_blank">
                  <img
                    src={Recipe}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "450px", height: "400px" }}
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
                      <u>RECIPE VAULT</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  Recipe Vault is an online management tool to keep family
                  recipes safe for future generations. I used Node.js and
                  Postgres to build the back end of this project.
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
        <div class="row ml-5 mt-5">
          <div class="col-sm">
            {" "}
            <Card style={{ width: "25rem" }}>
              <div class="card">
                <a href="https://we-serve-soup.netlify.com/" target="_blank">
                  <img
                    src={Soup}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "450px", height: "400px" }}
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
                      <u>WE SERVE SOUP</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  We Serve Soup is a simple soup kitchen management software
                  that allows inventory tracking. I built the front end in React
                  and used React Hooks to manage state.
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
            <Card style={{ width: "25rem" }}>
              <div class="card">
                <a
                  href="https://watermyplants-html.netlify.com/"
                  target="_blank"
                >
                  <img
                    src={Water}
                    class="img-fluid"
                    alt="Responsive image"
                    style={{ width: "450px", height: "400px" }}
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
                      <u>WATER MY PLANTS</u>
                    </h3>
                  </Card.Title>
                </Nav.Link>
                <Card.Text>
                  Water My Plants helps users create a custom plant watering
                  schedule that will reminds them when to water their plants. I
                  built a marketing and about us page using HTML, CSS, and
                  JavaScript.
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
