import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Fire from "./components/firebase/Fire";
import Nav from "./components/home/Nav";
import Routes from "./components/routes/Routes";
import {setUserLogIn, setUserData} from "./redux-stores/actions/actions";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        Fire.auth().onAuthStateChanged((user) => {

            user ? ((() => {
                dispatch(setUserLogIn(true));
                dispatch(setUserData(user.email, user.displayName)) })())
                :
                dispatch(setUserLogIn(false));
        });
      }, [dispatch]);

  return (
      <div className={'App'}>
          <Router>
              <Nav/>
            <Routes/>
          </Router>
      </div>
  );
}

export default App;
