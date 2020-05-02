import React from "react";
import Garages from '../../garages.json';
import {useDispatch} from "react-redux";
import {setGarage} from "../../redux-stores/actions/actions";

function SideBar () {

    const dispatch = useDispatch();
    const [clickStatus, setStatus] = React.useState(false);
    let IUPUIGarages = Garages.map((gEle, key) =>
        <li className={'border-right'} key={key} onClick={() => {
            dispatch(setGarage(gEle.location.lat, gEle.location.lng, 18))
        }}>
            <div>
                <p>{gEle.name}</p>
                {/*<p>{gEle.type}</p>*/}
                {/*<p>Clearance: {gEle.clearances}</p>*/}
            </div>
        </li>
    );

    return(
      <div className={'side-bar'}>
          <div className={!clickStatus ? 'menu border-right' : 'menu transform-menu circle'} onClick={() => {
              setStatus(!clickStatus);
          }}>
              {!clickStatus ?
                  <span style={{fontSize: '2em', color: '#fff'}}><i className="fas fa-angle-right"></i></span> :
                  <span style={{fontSize: '2em', color: '#fff'}}><i className="fas fa-angle-left"></i></span>}
          </div>
          <ul className={clickStatus ? 'open' : 'closed'}>
              {IUPUIGarages}
          </ul>
      </div>
    );
}

export default SideBar;