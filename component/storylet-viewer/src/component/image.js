import React from 'react'

export default function Image({component})
{
    return (
        <div className="image-moveable-container"
        style={{
            top:component.y+'%',
            left:component.x+'%',
            width:component.w+'%',
            height:component.h+'%',
            transform:'scale(' + component.scale[0] + ',' + component.scale[1] + ') rotate(' + component.rotate + 'deg)',
            zIndex:component.zIndex,
            position: 'absolute'
        }}>
            <img style={{width:'100%', height:'100%'}} src={component.src} alt={component.src}/>
        </div>
    )
};