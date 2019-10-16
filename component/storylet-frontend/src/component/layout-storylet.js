import React from 'react'
import StoryletStyle from '../style/layout-storylet-style'

export default function LayoutStorylet({name, description, layoutClickHandler, width, s_width, s_height, src})
{
    return (
        <StoryletStyle width={width} onClick={layoutClickHandler} s_width={s_width} s_height={s_height} src={src}>
            <div class="preview" ></div>
            <div class="info">{name} {description}</div>
        </StoryletStyle>
    )
};