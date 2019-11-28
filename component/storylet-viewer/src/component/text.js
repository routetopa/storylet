import React from 'react';

export default function Text({component})
{

    return (
        <div
            style={{
                top:component.y+'%',
                left:component.x+'%',
                width:component.w+'%',
                height:component.h+'%',
                transform:'scale(' + component.scale[0] + ',' + component.scale[1] + ') rotate(' + component.rotate + 'deg)',
                zIndex:component.zIndex,
                fontSize:0.05 * component.fontSize +'vw',
                color:component.color,
                position:'absolute'
        }}>{component.value}</div>
    )
};