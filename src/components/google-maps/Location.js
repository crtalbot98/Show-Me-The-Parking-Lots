import React from "react";
import {useSelector} from "react-redux";

function Location () {

    const userLoc = useSelector(state => state.userLocation);
    const [loc, setLoc] = React.useState({
        x: '',
        y: ''
    });

    React.useEffect(() => {
        setLoc(userLoc)
    }, [userLoc]);

    return(
        <div className={'recenter border-left latAndLng'}>
            <p>{Number(loc.x).toFixed(4)}&#176;N {Number(loc.y).toFixed(4)}&#176;W</p>
        </div>
    );
}

export default Location;