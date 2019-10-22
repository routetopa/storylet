import React from 'react'
import Slide from '../component/slide'
import StageContainerStyle from '../style/stage-container-style'
import {useSelector} from 'react-redux'

export default function StageContainer()
{
    console.log('stage container');

    const selectedSlide = useSelector(state => state.selectedSlideReducer);

    return (
        <StageContainerStyle>
            {selectedSlide ?
                (
                    <>
                        <Slide components={selectedSlide.components} isEditable={true} />
                    </>
                )
                : null
            }
        </StageContainerStyle>
    )
};