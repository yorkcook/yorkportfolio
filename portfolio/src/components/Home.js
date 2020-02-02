import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

import York from "./york.png";

const Home = () => {
  return (
    <div>
      <div class="m-4">
        <img
          src={York}
          class="rounded-circle w-25 h-25"
          alt="Responsive image"
        ></img>
      </div>
      <div class="m-3">
        <Jumbotron fluid style={{ backgroundColor: "white" }}>
          <h1 class="mb-3">Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>{" "}
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>{" "}
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>{" "}
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>{" "}
        </Jumbotron>
      </div>
    </div>
  );
};

export default Home;
