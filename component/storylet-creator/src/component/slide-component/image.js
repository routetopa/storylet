import React from 'react'

import ImageStyle from '../../style/image-style'

export default function Text({x, y, src})
{
    return (
            <div style={{position:'absolute', top:y, left:x}}>
                <img  style={{position:'absolute'}} src={src} alt=""></img>
            </div>
    )
};