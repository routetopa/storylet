import React from 'react'

import '../../style/slide-components/image-style.css';

export default function Image({component, onClick, isEditable})
{
    return (
        <div className="image-moveable-container" onClick={onClick} id={isEditable ? "component-"+component.index : ""}
        style={{
            top:component.y+'%',
            left:component.x+'%',
            width:component.w+'%',
            height:component.h+'%',
            transform:'scale(' + component.scale[0] + ',' + component.scale[1] + ') rotate(' + component.rotate + 'deg)',
            zIndex:component.zIndex
        }}>
            <img src={`${window.STATIC.IMAGE_BASE_PATH}${component.src}`} alt={`${window.STATIC.IMAGE_BASE_PATH}${component.src}`}/>
        </div>
    )
};