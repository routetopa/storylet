import React from 'react'
import TextProperties from '../component/properties-component/text-properties'
import ImageProperties from '../component/properties-component/image-properties'
import {useSelector} from 'react-redux'
import PropertiesContainerStyle from '../style/properties-container-style'

export default function PropertiesContainer()
{
    console.log('properties container');

    const selectedComponent = useSelector(state => state.selectedComponentReducer);

    return (
        <PropertiesContainerStyle>
            <span>{selectedComponent && selectedComponent.type}</span>
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