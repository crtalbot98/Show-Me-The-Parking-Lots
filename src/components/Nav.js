import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Nav () {

    const isUserSignedIn = useSelector(state => state.isSignedIn);
    const user = useSelector(state => state.userData);

    console.log(isUserSignedIn);

    return(
      <nav>
        <h1>49900 Final Project</h1>
        {isUserSignedIn ? <p>{user.name}</p> : <div><Link to={"/signin"}>Sign In</Link> <Link to={"/signup"}>Sign Up</Link></div>}
      </nav>
    );
}

export default Nav;