import React from 'react'
import SlideContainer from '../container/slide-container'
import StageContainer from '../container/stage-container'
import PropertiesContainer from '../container/properties-container'
import BodyContainerStyle from '../style/body-container-style'

export default function BodyContainer({slideData})
{
    console.log('body container');

    return (
        <BodyContainerStyle>

            <SlideContainer slideData={slideData} />

            <StageContainer />

            <PropertiesContainer />

        </BodyContainerStyle>
    )
};