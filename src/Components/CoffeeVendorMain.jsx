import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoffeeVendorMain = () => {
  const [stock, setStock] = useState({ coffee_shots: 10 });

  return (
    <div className="coffeeVendor">
      <Link to="/" className="homepageLink">
        <h2>Homepage</h2>
      </Link>
      <p> Enjoy!!!</p>
      <ul className="coffeeVendor_stock_list">
        Stock:
        <li>Coffee Shots: {stock.coffee_shots}</li>
      </ul>
    </div>
  );
};

export default CoffeeVendorMain;
