import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setGarage} from "../../redux-stores/actions/actions";

function Location () {

    const dispatch = useDispatch();
    const userLoc = useSelector(state => state.userLocation);
    const [loc, setLoc] = React.useState({
        x: '',
        y: ''
    });

    React.useEffect(() => {
        setLoc(userLoc)
    }, [userLoc]);

    return(
        <div className={'recenter border-left latAndLng'} onClick={() => {
            dispatch(setGarage(loc.x, loc.y, 18))
        }}>
            <p>{Number(loc.x).toFixed(3)}&#176;N {Number(loc.y).toFixed(3)}&#176;W</p>
        </div>
    );
}

export default Location;