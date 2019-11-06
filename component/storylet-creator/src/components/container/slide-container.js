import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Slide from '../slide'

// Style
import '../../style/container/slide-container.css';

// Actions
import selectSlide from '../../reducer/actions/select-slide-action'

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