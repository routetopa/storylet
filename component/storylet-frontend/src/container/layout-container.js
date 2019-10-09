import React from 'react'
import LayoutContainerStyle from '../style/layout-container-style'
import LayoutStorylet from '../component/layout-storylet'
import LayoutSearch from '../component/layout-search'

export default function LayoutContainer({layouts, searchHandler, layoutClickHandler})
{
    return (
        <LayoutContainerStyle>
            <LayoutSearch searchHandler={searchHandler}/>
            {layouts.map((layout, idx) => (
                <LayoutStorylet key={idx}
                                name={layout.name}
                                description={layout.description}
                                layoutClickHandler={(evt) => layoutClickHandler(evt, idx)} />
            ))}
        </LayoutContainerStyle>
    )
};