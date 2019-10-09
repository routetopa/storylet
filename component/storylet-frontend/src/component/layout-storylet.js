import React from 'react'
import StoryletStyle from '../style/layout-storylet-style'

export default function LayoutStorylet({name, description, layoutClickHandler})
{
    return (
        <StoryletStyle onClick={layoutClickHandler}>
        <h3>{name} - {description}</h3>
        </StoryletStyle>
    )
};