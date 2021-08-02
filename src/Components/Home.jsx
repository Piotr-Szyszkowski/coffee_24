import React from "react";
import { Link } from "react-router-dom";
import imageSrc from "../Images/strong-coffee.jpg";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={imageSrc}
          className="homepage_mainImage"
          alt="a cup of strong and aromatic coffee"
        />
        <h1>Welcome to Coffee 24</h1>
        <p>Best coffee north of Manchester</p>
        <Link to="/coffee_vendor" className="getSomeCoffeLink">
          <h1>Get some coffee</h1>
        </Link>
      </header>
    </div>
  );
};

export default Home;
