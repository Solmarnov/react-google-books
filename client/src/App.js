import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/", "/books"]}>
          <Books />
        </Route>
        <Route exact path="/books/:id">
          <Detail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
