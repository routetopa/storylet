import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Slide from '../component/slide'

// Actions
import selectSlide from '../actions/select-slide-action'

// Style
import '../style/slide-container.css';

export default function SlideContainer()
{
    const dispatch = useDispatch();
    const slidesData = useSelector(state => state.slidesData);

    return (
        <div className="slide-container">
            {slidesData.map((slide, idx) =>
                <Slide parameters={slide} isEditable={false} onClick={() => {dispatch(selectSlide(slidesData[idx]))}} />
            )}
        </div>
    )
};