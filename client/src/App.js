import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

//components
import Home from "./containers/Home"

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
