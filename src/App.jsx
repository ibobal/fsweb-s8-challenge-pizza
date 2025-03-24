import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import Order from "./components/Order";
import Success from "./components/Success";


function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
