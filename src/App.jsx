import { Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";


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
