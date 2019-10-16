import React from 'react'
import DescriptionStyle from '../style/layout-description-style'

export default function LayoutDescription({selectedLayout})
{
    return (
        <DescriptionStyle>

            <div className="d_left">
                <div className="preview"></div>
            </div>
            <div className="d_right">
                <div>{selectedLayout.name}</div>
                <div>{selectedLayout.description}</div>
            </div>

        </DescriptionStyle>
    )
};