import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { PonyNote, NotFound } from "pages";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PonyNote} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
