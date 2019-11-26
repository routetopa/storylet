import React from 'react'
import {useSelector} from 'react-redux'

import TextProperties from '../slide-components/properties/text-properties'
import ImageProperties from '../slide-components/properties/image-properties'

import '../../style/container/properties-container.css'

export default function PropertiesContainer()
{
    const selectedComponent = useSelector(state => state.selectedComponent);

    return (
        <div className="properties-container">
            <div className="tabs">
                <div className="tab selected">Component</div>
                <div className="tab">Slide</div>
            </div>
            <div className="properties col-md-12">
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
            </div>
        </div>
    )
};