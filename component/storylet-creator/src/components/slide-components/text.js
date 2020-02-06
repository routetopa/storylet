import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import setSlideData from '../../reducer/actions/set-slides-data'
import selectComponent from "../../reducer/actions/select-component";
import '../../style/slide-components/text-style.css';

export default function Text({component, onClick, isEditable})
{
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    const dispatch = useDispatch();
    const slidesData = useSelector(state => state.slidesData);

    const [text, setText] = useState(component.value);
    const [edit, setEdit] = useState(false);

    useEffect(()=>{
        if(selectedComponent && edit)
            setEdit(false);

    }, [selectedComponent]);


    const enable_edit = () => {
        if(!edit) {
            dispatch(selectComponent(null));
            setEdit(true);
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

    const update_text = (e) => {
        if(text === e.target.innerText)
            return;

        setText(e.target.innerText);

        let slideIdx = selectedSlide.index;
        let componentIdx = component.index;

        // console.log("********");
        // console.log(slideIdx, componentIdx, text);

        let data = cloneDeep(slidesData);
        data[slideIdx].components[componentIdx].value = e.target.innerText;
        dispatch(setSlideData(data));
    };

    return (
        <div id={isEditable ? "component-"+component.index : ""} className={edit ? "text-moveable-container editable" : "text-moveable-container"}
             onDoubleClick={enable_edit} onClick={enable_movable} onBlur={update_text}
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