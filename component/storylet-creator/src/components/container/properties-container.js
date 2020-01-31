import React, {useEffect, useState} from 'react'
import {batch, useDispatch, useSelector} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';

import {translate} from "../helpers";
import TextProperties from '../slide-components/properties/text-properties'
import ImageProperties from '../slide-components/properties/image-properties'

import '../../style/container/properties-container.css'
import setStorylet from "../../reducer/actions/set-storylet";

import { useDebounce } from 'use-debounce';
import { useDebouncedCallback } from 'use-debounce';

export default function PropertiesContainer()
{
    const dispatch = useDispatch();

    const ln = useSelector(state => state.selectedLanguage);
    const storylet = useSelector(state => state.storylet);
    const selectedComponent = useSelector(state => state.selectedComponent);
    const [selectedTab, setSelectedTab] = useState(1);
    const [autoplay, setAutoplay] = useState(false);
    const [template, setTemplate] = useState("linear");

    const [name, setName] = useState("");
    // const [endName] = useDebounce(name, 1000);

    const [debouncedName] = useDebouncedCallback(
        // function
        (value) => {
            set_name(value);
        },
        // delay in ms
        1000
    );

    const [description, setDescription] = useState("");
    // const [endDescription] = useDebounce(description, 1000);

    const [debouncedDescription] = useDebouncedCallback(
        // function
        (value) => {
            set_description(value);
        },
        // delay in ms
        1000
    );


    useEffect(() => {
        if(storylet) {
            if(storylet.name)
                setName(storylet.name);

            if(storylet.description)
                setDescription(storylet.description);

            if(storylet.viewer && storylet.viewer.autoplay)
                setAutoplay(storylet.viewer.autoplay);

            if(storylet.viewer && storylet.viewer.template)
                setTemplate(storylet.viewer.template);
        }
    }, [storylet]);

    useEffect(() => {
        if(!selectedComponent)
            return;

        setSelectedTab(0);
    }, [selectedComponent]);

    const set_template = (e) => {
        let data = cloneDeep(storylet);

        data.viewer.template = e.target.value;

        batch(() => {
            dispatch(setStorylet(data));
        });

        setTemplate(e.target.value);
    };

    const set_autoplay = () => {
        let data = cloneDeep(storylet);

        data.viewer.autoplay = !autoplay;

        batch(() => {
            dispatch(setStorylet(data));
        });

        setAutoplay(!autoplay);
    };

    const set_name = (name) => {
        let data = cloneDeep(storylet);
        data.name = name;
        setName(name);
        batch(() => {
            dispatch(setStorylet(data));
        });
    };


    const set_description = (description) => {
        let data = cloneDeep(storylet);
        data.description = description;
        setDescription(description);
        batch(() => {
            dispatch(setStorylet(data));
        });
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
            <div className={(selectedTab === 1 ? "properties col-md-12 show" : "properties col-md-12") + " slide"}>
                <div className="property-row">
                    <label className="template-label">{translate('title', ln)}</label>
                </div>
                <input className="form-control" defaultValue={name} onChange={(e) => debouncedName(e.target.value)} />
                <div className="property-row">
                    <label className="template-label">{translate('description', ln)}</label>
                </div>
                <textarea className="form-control template" defaultValue={description} onChange={(e) => debouncedDescription(e.target.value)} />
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