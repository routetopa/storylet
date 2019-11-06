import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import componentSelected from '../../actions/select-component-action'
import setSelectedSlide from '../../actions/select-slide-action'
import setSlideData from '../../actions/set-slide-data'

export default function TextProperties()
{
    const selectedComponent = useSelector(state => state.selectedComponentReducer);
    const selectedSlide = useSelector(state => state.selectedSlideReducer);
    const slidesData = useSelector(state => state.slidesData);
    const dispatch = useDispatch();

    const text_mod = (modificator) =>
    {
        console.log('set_text_bold');

        let slide_mod = Object.assign({}, selectedSlide);
        slide_mod.components[selectedComponent.key].value = `<${modificator}>${slide_mod.components[selectedComponent.key].value}</${modificator}>`;
        dispatch(setSelectedSlide(slide_mod));

        // REAL TIME THUMBNAIL MOD
        //let slidesData_mod = JSON.parse(JSON.stringify(slidesData));
        //slidesData_mod[selectedSlide.key] = slide_mod;
        //dispatch(setSlidesData(slidesData_mod));
    };

    return (
        <>
            <h1>Text Properties</h1>
            <div>
                <button onClick={() => text_mod('strong')}>Bold</button>
            </div>
            <div>
                <button onClick={() => text_mod('i')}>Italic</button>
            </div>
        </>

    )
};