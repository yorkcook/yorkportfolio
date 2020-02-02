import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

import Picture from "./image.png";

const Home = () => {
  return (
    <div>
      <div class="m-5">
        <img
          src={Picture}
          class="rounded-circle w-50 h-50"
          alt="Responsive image"
        ></img>
      </div>
      <div class="m-5">
        <Jumbotron fluid>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>{" "}
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Home;
