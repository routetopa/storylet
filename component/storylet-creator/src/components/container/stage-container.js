import React from 'react'
import {useSelector} from 'react-redux'

import Slide from '../slide'

import '../../style/container/stage-container-style.css'

export default function StageContainer() {
    const selectedSlide = useSelector(state => state.selectedSlideReducer);

    return (
        <div className="stage-container">
            {selectedSlide ? (<Slide parameters={selectedSlide} isEditable={true} />) : null}
        </div>
    )
};