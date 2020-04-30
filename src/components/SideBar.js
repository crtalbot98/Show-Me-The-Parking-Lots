import React from "react";
import Garages from '../garages.json';
import {useDispatch} from "react-redux";
import {setGarage} from "../redux-stores/actions/actions";

function SideBar () {

    const dispatch = useDispatch();
    let IUPUIGarages = Garages.map((gEle, key) =>
        <li key={key}>
            <div onClick={() => {dispatch(setGarage(gEle.location.lat, gEle.location.lng, 12))}}>
                <p>{gEle.name}</p>
                <p>{gEle.type}</p>
                <p>Clearance: {gEle.clearances}</p>
            </div>
        </li>
    );

    return(
      <div className={'side-bar'}>
          <ul>
              {IUPUIGarages}
          </ul>
      </div>
    );
}

export default SideBar;