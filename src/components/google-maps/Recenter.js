import React from "react";
import {useDispatch} from "react-redux";
import {setGarage} from "../../redux-stores/actions/actions";

function Recenter () {

    const dispatch = useDispatch();


    return(
        <div className={'recenter'} onClick={() => {
            dispatch(setGarage(39.768996924, -86.17166598, 10))
        }}>
            <p>IUPUI</p>
        </div>
    );
}

export default Recenter;