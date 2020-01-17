import React, {useEffect, useState} from 'react'
import {batch, useDispatch, useSelector} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';

import {translate} from "../helpers";
import TextProperties from '../slide-components/properties/text-properties'
import ImageProperties from '../slide-components/properties/image-properties'

import '../../style/container/properties-container.css'
import languageSelected from "../../reducer/actions/select-language";
import setSlidesData from "../../reducer/actions/set-slides-data";
import selectSlide from "../../reducer/actions/select-slide";

//TODO IMPORTANT --> autoplay and template not iin slide1

export default function PropertiesContainer()
{
    const dispatch = useDispatch();

    const ln = useSelector(state => state.selectedLanguage);
    const slidesData = useSelector(state => state.slidesData);
    const selectedComponent = useSelector(state => state.selectedComponent);
    const [selectedTab, setSelectedTab] = useState(1);
    const [autoplay, setAutoplay] = useState(null);
    const [template, setTemplate] = useState(null);

    useEffect(() => {
        //todo set init status
        if(autoplay !== null) //run only one time (init)
            return;

        if(slidesData && slidesData[0]) {
            if(slidesData[0].autoplay)
                setAutoplay(slidesData[0].autoplay);
            else
                setAutoplay(false);

            if(slidesData[0].template)
                setTemplate(slidesData[0].template);
            else
                setTemplate("linear");
        }
    }, [slidesData]);

    useEffect(() => {
        if(!selectedComponent)
            return;

        setSelectedTab(0);
    }, [selectedComponent]);

    const set_template = (e) => {
        let data = cloneDeep(slidesData);

        data[0].template = e.target.value;

        batch(() => {
            dispatch(setSlidesData(data));
        });

        setTemplate(e.target.value);
    };

    const set_autoplay = () => {
        let data = cloneDeep(slidesData);

        data[0].autoplay = !autoplay;

        batch(() => {
            dispatch(setSlidesData(data));
        });

        setAutoplay(!autoplay);
    };

    function selectTab(e) {
        setSelectedTab(e._targetInst.index);
    }

    return (
        <div className="properties-container noselect">
            <div className="tabs">
                <div className={selectedTab === 0 ? "tab selected" : "tab"} onClick={selectTab}>{translate('component', ln)}</div>
                <div className={selectedTab === 1 ? "tab selected" : "tab"} onClick={selectTab}>{translate('slide', ln)}</div>
            </div>
            <div className={selectedTab === 0 ? "properties col-md-12 show" : "properties col-md-12"}>
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
            <div className={selectedTab === 1 ? "properties col-md-12 show" : "properties col-md-12"}>
                <div className="property-row">
                    <label className="template-label">{translate('template', ln)}</label>
                    <select className="form-control template" onChange={set_template}>
                        <option selected={template === "linear" ? "selected" : ""} value="linear">{translate('linear', ln)}</option>
                        <option selected={template === "snail" ? "selected" : ""} value="snail">{translate('snail', ln)}</option>
                        <option selected={template === "cube" ? "selected" : ""} value="cube">{translate('cube', ln)}</option>
                    </select>
                </div>
                <div className="property-row custom-checkbox">
                    <input checked={autoplay ? "checked" : ""} type="checkbox" className="custom-control-input" id="menuAutoplay" onChange={set_autoplay} value="autoplay"/>
                    <label className="custom-control-label mycb" htmlFor="menuAutoplay">{translate('autoplay', ln)}</label>
                </div>
            </div>
        </div>
    )
};