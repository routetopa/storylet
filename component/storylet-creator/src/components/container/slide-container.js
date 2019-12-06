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

    return (
        <div className="slide-container">
            {slidesData.map((slide, idx) =>
                <Slide isSettingVisible={true} key={idx} parameters={slide} isEditable={false} onClick={() => {dispatch(componentSelected(null)); dispatch(selectSlide(slidesData[idx]))}} />
            )}
        </div>
    )
};