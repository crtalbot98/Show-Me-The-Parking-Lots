import React from "react";
import GoogleMapReact from 'google-map-react';
import Garages from '../../garages.json';
import Pointer from "./Pointer";
import {useSelector} from "react-redux";

function GoogleMaps(){

    const mapsKey = 'AIzaSyB3CvKgpfY4aSTMvI5B7-EhxUqe7hF0uuk';
    const currentGarage = useSelector(state => state.selectedGarage);
    const [zoom, updateZoom] = React.useState(14);
    const [center, updateCenter] = React.useState({
        lat: 39.768996924,
        lng: -86.17166598
    });

    let pointers = Garages.map((ele, key) =>
        <Pointer key={key} lat={ele.location.lat} lng={ele.location.lng}/>
    );

    React.useEffect(() => {

        updateZoom(currentGarage.zoom);
        updateCenter({
            lat: currentGarage.lat,
            lng: currentGarage.lng
        })

    }, [currentGarage]);

    return(
        <div className={'google-maps'}>
            <GoogleMapReact
                bootstrapURLKeys = {{key: mapsKey}}
                center = {[center.lat, center.lng]}
                defaultZoom = {zoom}
                distanceToMouse = {()=>{}}
            >
                {pointers}
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMaps;