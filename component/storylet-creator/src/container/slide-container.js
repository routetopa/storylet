import React from 'react'
import Slide from '../component/slide'
import SlideContainerStyle from '../style/slide-container-style'
import {useDispatch} from 'react-redux'
import selectedSlide from '../actions/select-slide-action'

export default function SlideContainer({slideData})
{
    console.log('slide container');

    const dispatch = useDispatch();

    return (
        <SlideContainerStyle>
            <div className="slide-container">
            {slideData.map((slide, idx) => <div key={slide.id} onClick={(evt) => dispatch(selectedSlide(slideData[idx]))}>
                                            <Slide key={slide.id} isEditable={false} components={slide.components}/>
                                           </div>)}
            </div>
        </SlideContainerStyle>
    )
};