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
            <span style={{fontSize: '1.5em', color: '#fff', marginRight: '0.5em'}}>
                <i className="fas fa-location-arrow"></i>
            </span>
        </div>
    );
}

export default Location;