import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { coffees } from "../DB/coffees";

const CoffeeVendorMain = () => {
  const coffeesArray = Object.entries(coffees);
  const [stock, setStock] = useState({ coffee_shots: 10, milk: 10 });
  const [order, setOrder] = useState({ coffee: "none" });
  const [previousOrder, setPreviousOrder] = useState({ coffee: "none" });
  useEffect(() => {
    if (order.coffee !== "none") {
      setStock((currentStock) => {
        const newStock = { ...currentStock };
        newStock.coffee_shots =
          currentStock.coffee_shots +
          coffees[previousOrder.coffee].shots_cost -
          coffees[order.coffee].shots_cost;
        newStock.milk =
          currentStock.milk +
          coffees[previousOrder.coffee].milk_cost -
          coffees[order.coffee].milk_cost;
        return newStock;
      });
    }
  }, [order]);

  const coffeeSubmitHandle = (chosenCoffeeType) => {
    setOrder((currentOrder) => {
      setPreviousOrder(order);
      const newOrder = { ...currentOrder };
      newOrder.coffee = chosenCoffeeType;

      return newOrder;
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
        {coffeesArray.map((coffee) => {
          if (coffee[0] === "none") {
            return (
              <option hidden value={coffee[0]} key={coffee[0]}>
                {`${coffee[0]}`}
              </option>
            );
          } else {
            return (
              <option value={coffee[0]} key={coffee[0]}>
                {`${coffee[0]}`}
              </option>
            );
          }
        })}
        {/* <option hidden>Select coffe type...</option>
        <option value="Americano single shot">Americano single shot</option>
        <option value="Americano double shot">Americano double shot</option>
        <option value="Flat white">Flat white</option>
        <option value="Space Rocket">Space Rocket</option>
        <option value="Latte">Latte</option> */}
      </select>
      <h3>
        Current order: <br></br>Coffee: {order.coffee}
      </h3>
      <ul className="coffeeVendor_stock_list">
        In Stock:
        <li>Coffee Shots: {stock.coffee_shots}</li>
        <li>Milk: {stock.milk}</li>
      </ul>
    </div>
  );
};

export default CoffeeVendorMain;
