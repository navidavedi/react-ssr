import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePageComponent from "./pages/HomePageComponent";

const App = () => {
  return (
    <Switch>
      <Route
        exact
        path="*"
        render={props => <HomePageComponent {...props} />}
      ></Route>
    </Switch>
  );
};

export default App;
