import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from "../Home";
import SignIn from "../user/SignUp";
import SignUp from "../user/SignUp";

function Routes () {

    return(
      <Router>
          <Switch>
              <Route route={'/'} exact component={Home}/>
              <Route route={'/signup'} exact component={SignUp}/>
              <Route route={'/signin'} exact component={SignIn}/>
          </Switch>
      </Router>
    );
}

export default Routes;