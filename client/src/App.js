import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

//components
import Home from "./containers/Home";
import Slides from "./containers/Slides";
import About from "./containers/About";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/slides" exact component={Slides} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
