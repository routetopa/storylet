import React, {useEffect} from 'react'
import MenuContainer from './menu-container'
import Slide from '../slide'

import {batch, useDispatch, useSelector} from 'react-redux'

import '../../style/container/stage-container-style.css'
import componentSelected from "../../reducer/actions/select-component";
import setSlidesData from "../../reducer/actions/set-slides-data";
import selectSlide from "../../reducer/actions/select-slide";

import cloneDeep from 'lodash/cloneDeep';

export default function StageContainer({isSettingVisible}) {
    const dispatch = useDispatch();
    const selectedSlide = useSelector(state => state.selectedSlide);
    const copiedComponent = useSelector(state => state.copiedComponent);
    const slidesData = useSelector(state => state.slidesData);

    useEffect(()=>{
        document.removeEventListener('keydown', add_component);
        if(!copiedComponent || !selectedSlide)
            return;
        document.addEventListener("keydown", add_component);
        return function cleanup() {
            document.removeEventListener('keydown', add_component);
        };
    }, [selectedSlide, copiedComponent]);

    const add_component = (event) =>
    {
        let key = event.which || event.keyCode;
        let ctrl = event.ctrlKey ? event.ctrlKey : key === 17;

        if ( key === 86 && ctrl ) {
            // alert('add ' + copiedComponent.src)
            let data = cloneDeep(slidesData);
            let component = cloneDeep(copiedComponent);

            component.index = selectedSlide.components.length;

            data[selectedSlide.index].components.push(component);

            batch(() => {
                dispatch(setSlidesData(data));
                dispatch(selectSlide(data[selectedSlide.index]));
                dispatch(componentSelected(component));
            });
        }
    };

    return (
        <div id="stage-container">
            <MenuContainer />
            <div id="slide-wrapper" onClick={(e) => {if(e.target.id === 'slide-wrapper' || e.target.id.indexOf('slide_') > -1) dispatch(componentSelected(null))}} >
                {selectedSlide ? (<Slide isSettingVisible={isSettingVisible} parameters={selectedSlide} isEditable={true} />) : null}
            </div>
        </div>
    )
};