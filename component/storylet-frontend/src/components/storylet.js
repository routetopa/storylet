import React from 'react'
import StoryletStyle from './style/storylet.css'

export default function Storylet({storyletClickHandler, previewWidth, storylet})
{
    const {name, description, width, height, src, tag} = storylet;

    return (
        <StoryletStyle width={previewWidth} onClick={storyletClickHandler} s_width={width} s_height={height} src={src}>
            <div className="preview" ></div>
            <div className="info">{name}</div>
        </StoryletStyle>
    )
};