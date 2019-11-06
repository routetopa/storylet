import React from 'react'

import ImageStyle from '../../style/image-style'

// import img from '../../images/fantastic-characters/003-dinosaur.png'
export default function Text({x, y, src, onClick})
{
    return (
        <div onClick={onClick} style={{position:'absolute', top:y+'%', left:x+'%', width:'100px', height:'100px'}}>
            <img style={{position:'absolute', width:'100%',height:'100%'}} src={src} alt=""/>
        </div>
    )
};