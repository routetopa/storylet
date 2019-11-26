import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

export default function Textroperties() {
    // const dispatch = useDispatch();
    const slidesData = useSelector(state => state.slidesData); // reducer --> rerender if event

    //dispatch di azione da importare ()

    console.log("Textroperties", slidesData);

    return (
        <></>
    )
};
