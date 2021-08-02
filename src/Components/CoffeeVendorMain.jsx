import React, { useState } from "react";
import { Link } from "react-router-dom";

const CoffeeVendorMain = () => {
  const [stock, setStock] = useState({ coffee_shots: 10 });
  const [order, setOrder] = useState({ coffee: "none" });

  const coffeeSubmitHandle = (chosenCoffeeType) => {
    setOrder((currentOrder) => {
      const newOrder = { ...currentOrder };
      newOrder.coffee = chosenCoffeeType;
      return newOrder;
    });

    setStock((currentStock) => {
      const newStock = { ...currentStock };
      newStock.coffee_shots = currentStock.coffee_shots - 1;
      return newStock;
    });
  };
  return (
    <div className="coffeeVendor">
      <Link to="/" className="homepageLink">
        <h2>Homepage</h2>
      </Link>
      <p> Enjoy!!!</p>
      <select
        onChange={(event) => {
          const chosenCoffeeType = event.target.value;
          coffeeSubmitHandle(chosenCoffeeType);
        }}
      >
        <option hidden>Select coffe type...</option>
        <option value="Americano single shot">Americano single shot</option>
        <option value="Americano double shot">Americano double shot</option>
        <option value="Flat white">Flat white</option>
      </select>
      <h3>
        Current order: <br></br>Coffee: {order.coffee}
      </h3>
      <ul className="coffeeVendor_stock_list">
        Stock:
        <li>Coffee Shots: {stock.coffee_shots}</li>
      </ul>
    </div>
  );
};

export default CoffeeVendorMain;
