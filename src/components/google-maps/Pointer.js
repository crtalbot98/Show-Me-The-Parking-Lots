import React from "react";
import {useSelector} from "react-redux";
import {latToMiles} from "../helpers/helper";

function Pointer (props) {

    const closestGarage = useSelector(state => state.closestGarage);
    const userLoc = useSelector(state => state.userLocation);
    const [checkClosest, setClosest] = React.useState('');
    const [isClosest, setIsClosest] = React.useState(false);

    React.useEffect(() => {
        if(latToMiles(props.lat, userLoc.x, props.lng, userLoc.y) <= 0.1){
            setIsClosest(true);
            setClosest(closestGarage);
        }
        else{
            setIsClosest(false);
        }
    }, [props, closestGarage, userLoc]);

    return(
      <div className={isClosest ? 'pointer pointer-open' : 'pointer pointer-closed'}>
          {isClosest ?
              <div>
                  <p>{checkClosest.name}</p>
                  <p>{checkClosest.type}</p>
                  <p>{checkClosest.clearances}</p>
              </div>
              : ''}
      </div>
    );
}

export default Pointer;