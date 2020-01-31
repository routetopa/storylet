import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import HeaderContainer from './components/container/header-container'
import BodyContainer from './components/container/body-container'
import MoveableComponent from "./components/moveable/moveable-component";

import setSlideData from './reducer/actions/set-slides-data'
import setStorylet from './reducer/actions/set-storylet'

import './StoryletCreator.css';
import selectSlide from "./reducer/actions/select-slide";

function StoryletCreator()
{
    const dispatch = useDispatch();

    const [isSettingVisible, setIsSettingVisible] = useState(true);

    useEffect(() =>
    {
        let data  = JSON.parse(window.STORY.DATA);
        let story = JSON.parse(data.story);
        dispatch(setStorylet(JSON.parse(data.metadata)));
        dispatch(setSlideData(story));
        dispatch(selectSlide(story[0]));
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