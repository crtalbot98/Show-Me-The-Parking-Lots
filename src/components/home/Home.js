import React from "react";
import SideBar from "./SideBar";
import Recenter from "../google-maps/Recenter";
import GoogleMaps from "../google-maps/GoogleMaps";
import Location from "../google-maps/Location";
import ClosestGarage from "../google-maps/ClosestGarage";
import NearITAndET from "../google-maps/nearITandET";

function Home () {

    return(
        <div className={'body-cont'}>
            <SideBar/>
            <Recenter/>
            <Location/>
            <ClosestGarage/>
            <NearITAndET/>
            <GoogleMaps/>
        </div>
    );
}

export default Home;