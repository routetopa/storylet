import React from 'react';

import '../../style/slide-components/text-style.css';

export default function Text({component, onClick, isEditable})
{
    return (
        <div className="text-moveable-container" onClick={onClick} id={isEditable ? "component-"+component.index : ""}
            style={{
                top:component.y+'%',
                left:component.x+'%',
                width:component.w+'%',
                height:component.h+'%',
                transform:'scale(' + component.scale[0] + ',' + component.scale[1] + ') rotate(' + component.rotate + 'deg)',
                zIndex:component.zIndex,

                fontFamily:component.fontFamily,
                fontSize:0.1*(isEditable ? component.fontSize : component.fontSize/2)+'vw',
                color:component.color,
                fontWeight:component.fontWeight,
                fontStyle:component.fontStyle,
                textDecoration:component.textDecoration,
                textAlign:component.textAlign,
                backgroundColor:component.backgroundColor
            }}
        >
            <div dangerouslySetInnerHTML={{__html: component.value}} />
            {/*{component.value}*/}
        </div>
    )
};