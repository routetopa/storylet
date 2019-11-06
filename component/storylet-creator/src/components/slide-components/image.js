import React from 'react'

import '../../style/slide-components/image-style.css';

export default function Text({component, onClick})
{
    return (
        <div className="image-moveable-container" onClick={onClick} style={{
            top:component.y+'%',
            left:component.x+'%',
            width:component.w+'%',
            height:component.h+'%',
            transform:component.transform
        }}>
            <img src={component.src} alt={component.src}/>
        </div>
    )
};