import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import York from "./york.png";

const Home = () => {
  return (
    <div>
      <div class="m-4">
        <img
          src={York}
          class="rounded-circle w-25 h-25"
          alt="york"
        ></img>
      </div>
      <div class="m-3">
        <Jumbotron
          fluid
          style={{ backgroundColor: "white", fontFamily: "arial" }}
        >
          <h1 class="mb-3">Hello!</h1>
          <p>
            My name is York and I'm a Full Stack Software Engineer who can write
            applications in JavaScript, React and NodeJS. When not in front of a
            keyboard, you can find me out and about advocating for
            cryptocurrencies, researching regenerative farming, playing chess,
            or any number of other wide ranging activities!
          </p>{" "}
          {/* <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>{" "}
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>{" "} */}
        </Jumbotron>
      </div>
    </div>
  );
};

export default Home;
