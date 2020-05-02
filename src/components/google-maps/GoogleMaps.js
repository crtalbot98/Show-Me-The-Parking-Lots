import React from "react";
import GoogleMapReact from 'google-map-react';
import Garages from '../../garages.json';
import Pointer from "./Pointer";
import UserPointer from "./UserPointer";
import {useSelector, useDispatch} from "react-redux";
import {setUserLoc, closestGarage} from "../../redux-stores/actions/actions";
import {latToMiles} from "../helpers/helper";

function GoogleMaps(){

    const mapsKey = 'AIzaSyB3CvKgpfY4aSTMvI5B7-EhxUqe7hF0uuk';
    const dispatch = useDispatch();
    const [garageList, SetGarageList] = React.useState(Garages);
    const [currentPos, setPos] = React.useState({});
    const [error, setError] = React.useState(null);
    const currentGarage = useSelector(state => state.selectedGarage);
    const nearITandET = useSelector(state => state.itAndEt);
    const [zoom, updateZoom] = React.useState(15);
    const [center, updateCenter] = React.useState({
        lat: 39.768996924,
        lng: -86.17166598
    });

    const getAllMiles = (userLoc) => {
        let current = {},
            closest = {},
            currentMiles = -1;

        garageList.forEach((gEle) => {
            const miles = latToMiles(Number(userLoc.x), Number(gEle.location.lat), Number(userLoc.y), Number(gEle.location.lng));
            if(miles < currentMiles) {
                closest.name = gEle.name;
                closest.miles = miles;
                closest.clearances = gEle.clearances;
                closest.type = gEle.type;
            }

            current = gEle;
            currentMiles = miles;
        });

        dispatch(closestGarage(closest));
    };

    const onChange = ({coords}) => {

        setPos({
            x: coords.latitude,
            y: coords.longitude,
        });

        getAllMiles({x: coords.latitude, y: coords.longitude});

        dispatch(setUserLoc(coords.latitude, coords.longitude));
    };

    const onError = (error) => {
        setError(error.message);
    };

    let pointers = garageList.map((ele, key) =>
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
        if(nearITandET){
            const newGarList = Garages.filter((ele) => {
                if(ele.name === 'Gateway Garage (XL)' || ele.name === 'Blackford Street Garage (XF)' || ele.name === 'North Street Garage (XC)'){
                    return true;
                }
            });
            SetGarageList(newGarList);
        }
        else{
            SetGarageList(Garages);
        }
    }, [nearITandET]);

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
                <UserPointer lat={currentPos.x} lng={currentPos.y}/>
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMaps;