import { Switch, Route } from "react-router-dom";
import "./App.css";
import CoffeeVendorMain from "./Components/CoffeeVendorMain";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/coffee_vendor">
          <CoffeeVendorMain />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
