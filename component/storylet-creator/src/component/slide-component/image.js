import React from 'react'

import ImageStyle from '../../style/image-style'

export default function Text({x, y, src})
{
    return (
        <ImageStyle x={x} y={y}>
            <div>
                <img src={src} alt=""></img>
            </div>
        </ImageStyle>
    )
};