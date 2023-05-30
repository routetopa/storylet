import React from 'react';

import '../../style/slide-components/datalet-style.css';

export default function Datalet({component, onClick, isEditable})
{
    return (
        <div className="datalet-moveable-container" onClick={onClick} id={isEditable ? "component-"+component.index : ""}
             style={{
                 top:component.y+'%',
                 left:component.x+'%',
                 width:component.w+'%',
                 height:component.h+'%',
                 transform:'scale(' + component.scale[0] + ',' + component.scale[1] + ') rotate(' + component.rotate + 'deg)',
                 zIndex:component.zIndex
             }}
        >
            <iframe
                style={{width: '100%', height:'100%', position: 'relative', transform: 'scale(0.9)'}}
                srcDoc={component.datalet}
            ></iframe>
        </div>
    )
};