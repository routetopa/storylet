import React from 'react'
import SlideContainer from './slide-container'
import StageContainer from './stage-container'
import PropertiesContainer from './properties-container'

import '../../style/container/body-container.css'

export default function BodyContainer({isSettingVisible})
{
    return (
        <div className={'body-container ' + (isSettingVisible ? '' : 'hideSettings')}>

            <SlideContainer />

            <StageContainer isSettingVisible={isSettingVisible} />

            <PropertiesContainer />

        </div>
    )
};