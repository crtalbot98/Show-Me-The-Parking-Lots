import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Home from "../Home";
import SignIn from "../user/SignUp";
import SignUp from "../user/SignUp";

function Routes () {

    return(
        <Switch>
            <Route exact route={'/'} component={Home}/>
            <Route route={'/signup'} exact component={SignUp}/>
            <Route route={'/signin'} exact component={SignIn}/>
        </Switch>
    );
}

export default Routes;