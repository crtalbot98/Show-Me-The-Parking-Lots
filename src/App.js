import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import GoogleMaps from "./components/google-maps/GoogleMaps";
import Recenter from "./components/google-maps/Recenter";
import Routes from "./components/routes/Routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Nav/>
            <div className={'body-cont'}>
                <SideBar/>
                <Recenter/>
                <GoogleMaps/>
            </div>
            <Routes/>
        </Router>
    </div>
  );
}

export default App;
