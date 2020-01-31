import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const Portfolio = () => {
  return (
    <div>
      <div class="container ">
        <div class="row mt-5">
          <div class="col">
            {" "}
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
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
                <Button variant="primary">GitHub</Button>
              </Card.Footer>
            </Card>
          </div>
          <div class="col">
            {" "}
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Recipe Vault</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">GitHub</Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            {" "}
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>We Serve Soup</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">GitHub</Button>
              </Card.Footer>
            </Card>
          </div>
          <div class="col">
            {" "}
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Water My Plants</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">GitHub</Button>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
