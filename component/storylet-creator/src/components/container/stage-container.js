import React from 'react'
import MenuContainer from './menu-container'
import Slide from '../slide'

import {useDispatch, useSelector} from 'react-redux'

import '../../style/container/stage-container-style.css'
import componentSelected from "../../reducer/actions/select-component";

export default function StageContainer() {
    const dispatch = useDispatch();
    const selectedSlide = useSelector(state => state.selectedSlide);

    return (
        <div id="stage-container">
            <MenuContainer />
            <div id="slide-wrapper" onClick={(e) => {if(e.target.id === 'stage-container' || e.target.id === 'selected-slide') dispatch(componentSelected(null))}} >
                {selectedSlide ? (<Slide parameters={selectedSlide} isEditable={true} />) : null}
            </div>
        </div>
    )
};