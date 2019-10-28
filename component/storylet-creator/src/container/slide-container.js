import React from 'react'
import Slide from '../component/slide'
import SlideContainerStyle from '../style/slide-container-style'
import {useDispatch, useSelector} from 'react-redux'
import selectedSlide from '../actions/select-slide-action'

export default function SlideContainer()
{
    console.log('slide container');
    const slideData = useSelector(state => state.slideData);
    const dispatch = useDispatch();

    return (
        <SlideContainerStyle>
            <div className="slide-container">
            {slideData.map((slide, idx) => <div key={slide.id} onClick={(evt) => {slideData[idx].key = idx; dispatch(selectedSlide(slideData[idx]))}}>
                                            <Slide key={slide.id} isEditable={false} components={slide.components}/>
                                           </div>)}
            </div>
        </SlideContainerStyle>
    )
};