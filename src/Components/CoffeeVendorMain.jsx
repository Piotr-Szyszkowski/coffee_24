import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { coffees } from "../DB/coffees";
import { xtras } from "../DB/xtras";

const CoffeeVendorMain = () => {
  const coffeesArray = Object.entries(coffees);
  const [stock, setStock] = useState({
    coffee_shots: 10,
    milk: 10,
    "white sugar": 20,
    "brown sugar": 20,
    vanilla: 20,
  });
  const [order, setOrder] = useState({ coffee: "none" });
  const [previousOrder, setPreviousOrder] = useState({ coffee: "none" });
  const [extras, setExtras] = useState({
    milk: 0,
    "white sugar": 0,
    "brown sugar": 0,
    vanilla: 0,
  });
  const extrasArray = Object.entries(extras);
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

  const extraSubmitHandle = (chosenExtra) => {
    if (chosenExtra !== "Select extras") {
      setExtras((currentExtras) => {
        const newExtras = { ...currentExtras };
        newExtras[chosenExtra] += 1;
        setStock((currentStock) => {
          const newStock = { ...currentStock };
          newStock[chosenExtra] -= 1;
          return newStock;
        });
        return newExtras;
      });
    }
  };

  const removeExtra = (extraToRemove) => {
    setExtras((currentExtras) => {
      const newExtras = { ...currentExtras };
      newExtras[extraToRemove] -= 1;
      setStock((currentStock) => {
        const newStock = { ...currentStock };
        newStock[extraToRemove] += 1;
        return newStock;
      });
      return newExtras;
    });
  };

  return (
    <div className="coffeeVendor">
      <Link to="/" className="homepageLink">
        <h2>Homepage</h2>
      </Link>
      <p> Enjoy!!!</p>
      <select
        className="coffeeVendor_coffe_dropdown"
        onChange={(event) => {
          const chosenCoffeeType = event.target.value;
          coffeeSubmitHandle(chosenCoffeeType);
        }}
      >
        {coffeesArray.map((coffee) => {
          if (coffee[0] === "none") {
            return (
              <option hidden value={coffee[0]} key={coffee[0]}>
                {`Select coffee type...`}
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
      </select>
      <br></br>
      <select
        className="coffeeVendor_extras_dropdown"
        onClick={(event) => {
          const chosenExtra = event.target.value;
          extraSubmitHandle(chosenExtra);
        }}
      >
        <option hidden value="Select extras">
          Select extras...
        </option>
        {xtras.map(({ xtra }) => {
          return (
            <option value={xtra} key={xtra}>
              {`${xtra}`}
            </option>
          );
        })}
      </select>
      <h3>
        <u>Current order: </u>
        <br></br>
        <br></br>
        Coffee:
        <span className="coffeeVendor_selectedCoffee">
          {" "}
          {order.coffee} {order.coffee === "none" ? `selected` : ""}
        </span>
      </h3>
      <ul className="coffeeVendor_chosen_extras_list">
        <p className="coffeeVendor_extras_selected_title">Extras selected:</p>
        {extrasArray.map((extra) => {
          if (extra[1] !== 0) {
            return (
              <li key={extra}>
                {`${extra[0]} x${extra[1]}`}
                <button
                  onClick={() => {
                    removeExtra(extra[0]);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          }
        })}
      </ul>
      <ul className="coffeeVendor_stock_list">
        In Stock:
        <li>Coffee Shots: {stock.coffee_shots}</li>
        <li>Milk: {stock.milk}</li>
        <li>White Sugar: {stock["white sugar"]}</li>
        <li>Brown Sugar: {stock["brown sugar"]}</li>
        <li>Vanilla: {stock.vanilla}</li>
      </ul>
    </div>
  );
};

export default CoffeeVendorMain;
