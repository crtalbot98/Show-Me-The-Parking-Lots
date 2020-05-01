import React from "react";
import {useSelector} from "react-redux";

function ClosestGarage () {

    const [closest, setClosest] = React.useState({
        name: '',
        miles: null
    });
    const closestG = useSelector(state => state.closestGarage);

    React.useEffect(() => {
        setClosest({
            name: closestG.name,
            miles: closestG.miles
        });
    }, [closestG]);

    return(
        <div className={'recenter border-left closestG'}>
            <p>Closest garage is {closest.name} at {Number(closest.miles).toFixed(2)} mile(s)</p>
        </div>
    )
}

export default ClosestGarage;