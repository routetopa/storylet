import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import setSlideData from '../../reducer/actions/set-slides-data'

import '../../style/slide-components/text-style.css';
import selectedSlide from "../../reducer/selected-slide";
import copyComponent from "../../reducer/actions/copy-component";
import selectComponent from "../../reducer/actions/select-component";


export default function Text({component, onClick, isEditable})
{
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    const dispatch = useDispatch();
    const slidesData = useSelector(state => state.slidesData);

    const [text, setText] = useState(component.value);
    const [edit, setEdit] = useState(false);

    useEffect(()=>{
        if(!selectedSlide)
            return;

        let slideIdx = selectedSlide.index;
        let componentIdx = component.index;

        let data = cloneDeep(slidesData);
        data[slideIdx].components[componentIdx].value = text;
        dispatch(setSlideData(data));

    }, [text]);

    useEffect(()=>{
        if(selectedComponent && edit)
            setEdit(false);

    }, [selectedComponent]);

    const enableEdit = () => {
        if(!edit) {
            dispatch(selectComponent(null));
            setEdit(true);
            // select cursor
            //border dottet
        }
        else if(edit && onClick) {
            onClick();
            setEdit(false);
        }
    };

    const enable_movable = () => {
        if(!edit && onClick) {
            onClick();
        }
    };

    return (
        <div id={isEditable ? "component-"+component.index : ""} className={edit ? "text-moveable-container editable" : "text-moveable-container"} onDoubleClick={enableEdit} onClick={enable_movable} onBlur={(e) => {setText(e.target.innerText);}}
            style={{
                top:component.y+'%',
                left:component.x+'%',
                width:component.w+'%',
                height:component.h+'%',
                transform:'scale(' + component.scale[0] + ',' + component.scale[1] + ') rotate(' + component.rotate + 'deg)',
                zIndex:component.zIndex,

                fontSize:0.05*(isEditable ? component.fontSize : component.fontSize/2)+'vw',
                color:component.color
        }} contentEditable={(isEditable && edit ? 'true' : 'false')} suppressContentEditableWarning={true}>{component.value}</div>
    )
};