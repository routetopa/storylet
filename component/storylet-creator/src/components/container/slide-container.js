import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Slide from '../slide'

// Style
import '../../style/container/slide-container.css';

// Actions
import selectSlide from '../../reducer/actions/select-slide'
import componentSelected from "../../reducer/actions/select-component";

export default function SlideContainer()
{
    const dispatch = useDispatch();
    const slidesData = useSelector(state => state.slidesData);
    const selectedSlide = useSelector(state => state.selectedSlide);

    return (
        <div className="slide-container">
            {slidesData.map((slide, idx) =>
                <Slide selected={slide.id===selectedSlide.id} isSettingVisible={true} key={idx} parameters={slide} isEditable={false} onClick={() => {dispatch(componentSelected(null)); dispatch(selectSlide(slidesData[idx]))}} />
            )}
        </div>
    )
};