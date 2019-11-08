import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import setSlideData from '../../reducer/actions/set-slide-data'

import '../../style/slide-components/text-style.css';

export default function Text({component, onClick, isEditable})
{
    const selectedSlide = useSelector(state => state.selectedSlideReducer);

    const dispatch = useDispatch();
    const slidesData = useSelector(state => state.slidesData);

    const [text, setText] = useState(component.value);
    const [edit, setEdit] = useState(true);

    useEffect(()=>{
        if(!selectedSlide)
            return;

        let slideIdx = selectedSlide.index;
        let componentIdx = component.index;

        let data = cloneDeep(slidesData);
        data[slideIdx].components[componentIdx].value = text;
        dispatch(setSlideData(data));

    }, [text]);

    return (
        <div className="text-moveable-container" onClick={onClick} onBlur={(e) => {setText(e.target.innerText);}}
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