import React from 'react'
import DescriptionStyle from '../style/layout-description-style'

export default function LayoutDescription({selectedLayout})
{
    return (
        <DescriptionStyle>
            <div>{selectedLayout.name}</div>
            <div>{selectedLayout.description}</div>
        </DescriptionStyle>
    )
};