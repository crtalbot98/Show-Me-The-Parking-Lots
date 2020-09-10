import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {useSelector} from "react-redux";
import Home from "../home/Home";
import SignIn from "../user/SignIn";
import SignUp from "../user/SignUp";

function Routes () {

    const isUserSignedIn = useSelector(state => state.isSignedIn);
    const [signInCheck, setSignIn] = React.useState(false);

    React.useEffect(() => {
        setSignIn(isUserSignedIn);
    }, [isUserSignedIn]);

    return(
        <Switch>
            <Route exact path={'/'}>
                {signInCheck ? <Home/> : <SignIn/>}
            </Route>
            <Route path={'/signup'}>
                {!signInCheck ? <SignUp/> : <Home/>}
            </Route>
            <Route path={'/signin'}>
                {!signInCheck ? <SignIn/> : <Home/>}
            </Route>
        </Switch>
    );
}

export default Routes;