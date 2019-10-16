import React from 'react'

import SlideContainer from '../container/slide-container'
import StageContainer from '../container/stage-container'
import PropertiesContainer from '../container/properties-container'

export default function BodyContainer()
{
    return (
        <>
            <SlideContainer />
            <StageContainer />
            <PropertiesContainer />
        </>
    )
};