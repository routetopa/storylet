import React from 'react'
import SlideContainer from './slide-container'
import StageContainer from './stage-container'
import PropertiesContainer from './properties-container'
import BodyContainerStyle from '../../style/container/body-container-style'

export default function BodyContainer()
{
    return (
        <BodyContainerStyle>

            <SlideContainer />

            <StageContainer />

            <PropertiesContainer />

        </BodyContainerStyle>
    )
};