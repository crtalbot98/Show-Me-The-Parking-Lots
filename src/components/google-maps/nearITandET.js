import React from "react";
import {setITAndET} from "../../redux-stores/actions/actions";
import {useDispatch} from "react-redux";

function NearITAndET () {

    const dispatch = useDispatch();

    return(
        <div className={'recenter border-left filter-garage'} onClick={() => {
            dispatch(setITAndET());
        }}>
            <p>IT/ET</p>
        </div>
    )
}

export default NearITAndET;