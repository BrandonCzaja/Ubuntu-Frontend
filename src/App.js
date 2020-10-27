import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp} />} />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" x={{}} handleSubmit={() => {}} />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" y={{}} handleSubmit={() => {}} />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
