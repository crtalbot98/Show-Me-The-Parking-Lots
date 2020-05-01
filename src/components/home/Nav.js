import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setUserLogIn} from "../../redux-stores/actions/actions";
import {Link} from "react-router-dom";
import Fire from "../firebase/Fire";

function Nav () {

    const dispatch = useDispatch();
    const isUserSignedIn = useSelector(state => state.isSignedIn);
    const [userSignedIn, setSignedIn] = React.useState(false);
    const user = useSelector(state => state.userData);

    console.log(user);

    const signOut = () => {
        Fire.auth().signOut().then(() => {
            dispatch(setUserLogIn(false));
        }).catch((err) => {
            console.log(err);
        })
    };

    React.useEffect(() => {
        setSignedIn(isUserSignedIn);
    }, [isUserSignedIn, user]);

    return(
      <nav className={'border-left'}>
        {userSignedIn ? <div><p>{user.name}</p> <p onClick={signOut}>Sign out</p></div> : <div><Link to={"/signin"}>Sign In</Link> <Link to={"/signup"}>Sign Up</Link></div>}
      </nav>
    );
}

export default Nav;