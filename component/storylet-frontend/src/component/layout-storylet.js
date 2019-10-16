import React from 'react'
import StoryletStyle from '../style/layout-storylet-style'

export default function LayoutStorylet({layoutClickHandler, l_width, layout})
{
    const {name, description, width, height, src} = layout;

    return (
        <StoryletStyle width={l_width} onClick={layoutClickHandler} s_width={width} s_height={height} src={src}>
            <div className="preview" ></div>
            <div className="info">{name} {description}</div>
        </StoryletStyle>
    )
};