import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import THPage from "./componentsTH/THPage";
import App from "./App.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/th" component={THPage} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
