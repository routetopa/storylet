import React from 'react'
import Text from './slide-component/text'
import Image from './slide-component/image'
import {useDispatch} from 'react-redux'
import componentSelected from '../actions/select-component-action'
import SlideComponentStyle from '../style/slide-component-style'

import draggableHOC from './hoc/draggable-hoc'

const shouldSlideNotRender = (prevProps, nextProps) => {
    //console.log(prevProps);
    //console.log(nextProps);
    return false; //always rerender
};

function Slide({components, isEditable})
{
    const dispatch = useDispatch();

    const DraggableText = draggableHOC(Text);

    return (
        <SlideComponentStyle>
            {
                (() =>
                {
                    if (!components) return null;
                    return components.map((c, idx) => {
                        c.key = idx;
                        switch (c.type) {
                            case 'text'  :
                                return (<div key={idx}  onClick={isEditable ? (evt) => dispatch(componentSelected(c)) : null}>
                                         <DraggableText isEditable={isEditable} key={idx} x={c.x} y={c.y} value={c.value}/>
                                        </div>);
                            case 'image' :
                                return (<div key={idx} onClick={isEditable ? (evt) => dispatch(componentSelected(c)) : null}>
                                            <Image isEditable={isEditable} key={idx} x={c.x} y={c.y} src={c.src}/>
                                        </div>);
                            default : break;
                        }
                        return null;
                    })
                })()
            }
        </SlideComponentStyle>
    )
};

export default React.memo(Slide, shouldSlideNotRender);

