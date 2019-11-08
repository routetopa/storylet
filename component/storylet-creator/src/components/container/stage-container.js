import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Slide from '../slide'

import '../../style/container/stage-container-style.css'
import componentSelected from "../../reducer/actions/select-component-action";

export default function StageContainer() {
    const dispatch = useDispatch();
    const selectedSlide = useSelector(state => state.selectedSlideReducer);

    return (
        <div id="stage-container" onClick={(e) => {if(e.target.id === 'stage-container' || e.target.id === 'selected-slide') dispatch(componentSelected(null))}} >
            {selectedSlide ? (<Slide parameters={selectedSlide} isEditable={true} />) : null}
        </div>
    )
};