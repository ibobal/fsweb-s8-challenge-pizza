import Home from "./components/Home";
import Order from "./components/Order";
import Success from "./components/Success";
import "./App.css";

import { Route, Switch } from "react-router-dom";

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
