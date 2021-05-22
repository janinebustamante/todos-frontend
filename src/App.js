import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/todos" component={TodoPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
