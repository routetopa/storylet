import React from 'react'
import DescriptionStyle from '../style/layout-description-style'

export default function LayoutDescription({selectedLayout})
{
    return (
        <DescriptionStyle>

            <div class="d_left">
                <div class="preview"></div>
            </div>
            <div class="d_right">
                <div>{selectedLayout.name}</div>
                <div>{selectedLayout.description}</div>
            </div>

        </DescriptionStyle>
    )
};