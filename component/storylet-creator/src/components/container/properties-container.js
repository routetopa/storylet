import React from 'react'
import TextProperties from '../slide-components/properties/text-properties'
import ImageProperties from '../slide-components/properties/image-properties'
import PropertiesContainerStyle from '../../style/container/properties-container-style'
import {useSelector} from 'react-redux'

export default function PropertiesContainer()
{
    const selectedComponent = useSelector(state => state.selectedComponentReducer);

    return (
        <PropertiesContainerStyle>
            {
                (() =>
                {
                    if (!selectedComponent) return null;
                    switch (selectedComponent.type) {
                        case 'text'  :
                            return (<TextProperties/>);
                        case 'image' :
                            return (<ImageProperties/>);
                        default : break;
                    }
                    return null;
                })()
            }
        </PropertiesContainerStyle>
    )
};