import React from 'react'
import DescriptionContainerStyle from '../style/description-container-style'
import LayoutDescription from '../component/layout-description'

export default function LayoutDescriptionContainer({selectedLayout})
{
    return (
        <DescriptionContainerStyle>
            <LayoutDescription selectedLayout={selectedLayout} />
        </DescriptionContainerStyle>
    )
};