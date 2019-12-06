import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import HeaderContainer from './components/container/header-container'
import BodyContainer from './components/container/body-container'
import MoveableComponent from "./components/moveable/moveable-component";

import setSlideData from './reducer/actions/set-slides-data'

import './StoryletCreator.css';
import selectSlide from "./reducer/actions/select-slide";

function StoryletCreator()
{
    const dispatch = useDispatch();

    const [isSettingVisible, setIsSettingVisible] = useState(true);

    useEffect(() =>
    {
        let data = JSON.parse(window.STORY.DATA.story);
        dispatch(setSlideData(data));
        dispatch(selectSlide(data[0]));
    }, []);

    const hide_settings = () => {
        setIsSettingVisible(!isSettingVisible);
    };

    return (
     <>
        <HeaderContainer hideSettings={hide_settings} />
        <BodyContainer isSettingVisible={isSettingVisible} />
        <MoveableComponent/>
     </>
    );
}

export default StoryletCreator;