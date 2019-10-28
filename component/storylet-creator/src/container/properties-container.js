import React from 'react'
import TextProperties from '../component/properties-component/text-properties'
import ImageProperties from '../component/properties-component/image-properties'
import PropertiesContainerStyle from '../style/properties-container-style'
import {useSelector} from 'react-redux'

export default function PropertiesContainer()
{
    console.log('properties container');

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