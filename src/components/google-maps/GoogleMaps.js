import React from "react";
import GoogleMapReact from 'google-map-react';
import Garages from '../../garages.json';
import Pointer from "./Pointer";
import {useSelector, useDispatch} from "react-redux";
import {setUserLoc} from "../../redux-stores/actions/actions";

function GoogleMaps(){

    const mapsKey = 'AIzaSyB3CvKgpfY4aSTMvI5B7-EhxUqe7hF0uuk';
    const dispatch = useDispatch();
    const [currentPos, setPos] = React.useState({});
    const [error, setError] = React.useState(null);
    const currentGarage = useSelector(state => state.selectedGarage);
    const [zoom, updateZoom] = React.useState(15);
    const [center, updateCenter] = React.useState({
        lat: 39.768996924,
        lng: -86.17166598
    });

    const onChange = ({coords}) => {
        setPos({
            x: coords.latitude,
            y: coords.longitude,
        });

        dispatch(setUserLoc(coords.latitude, coords.longitude));
    };

    const onError = (error) => {
        setError(error.message);
    };

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

    React.useEffect(() => {
        const geo = navigator.geolocation;
        let watcher = geo.watchPosition(onChange, onError);

        if(!geo){
            setError('Geolocation not available');
            return;
        }

        return () => geo.clearWatch(watcher);
    }, []);

    return(
        <div style={{  height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys = {{key: mapsKey}}
                center = {[Number(center.lat), Number(center.lng)]}
                zoom = {Number(zoom)}
                distanceToMouse = {()=>{}}
            >
                {pointers}
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMaps;