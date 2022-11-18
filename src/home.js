import React from "react";
import Raffimuttpic from "./Raffimuttpic.jpeg";

function Home() {
  return (
    <div className="container text-center">
      <div className="row">
        <img
          src={Raffimuttpic}
          alt="Raffi the mutt"
          className="img-fluid img-thumbnail col-5 m-3"
        />
        <div className="raffi-intro col-5 m-auto">
          <p>
            Hi, my name is Raffi! The goal of the game is to guess what breed
            the image below is. I'll keep track of how many you get right in a
            row. Try it out! Also, mutts like me are of course included! Have
            fun!
          </p>
          <link to="/quiz" className="btn btn-warning">
            Let's Go!
          </link>
        </div>
      </div>
    </div>
  );
}

export default Home;
