import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import HeaderContainer from './components/container/header-container'
import BodyContainer from './components/container/body-container'
import MoveableComponent from "./components/moveable/moveable-component";

import setSlideData from './reducer/actions/set-slide-data'

import './StoryletCreator.css';

function StoryletCreator()
{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSlideData(JSON.parse(window.STORY.DATA.story)));
    }, []);

    return (
     <>
        <HeaderContainer />
        <BodyContainer />
        <MoveableComponent/>
     </>
    );
}

export default StoryletCreator;