import React, {useState, useEffect} from 'react';

import HeaderContainer from './components/container/header-container'
import BodyContainer from './components/container/body-container'
import MoveableComponent from "./components/moveable/moveable-component";

import setSlideData from './reducer/actions/set-slide-data'
import {useDispatch} from 'react-redux'

import './StoryletCreator.css';

function StoryletCreator()
{
    const dispatch = useDispatch();

    const get_data = () =>
    {
      let data = {
          "name":"hello",
          "description":"description",
          "owner": {},
          "tag": {},
          "tipo": {},
          'theme':'css-theme',
          "template": {width:100, height:100},
          "data": [
              {
                  id:"1",
                  type:"",
                  background: '/images/backgrounds/forest.png',
                  components: [
                      {type:"text", value:"Once upon a time...", x:80, y:80, w:20, h:10, transform: ""},
                      {type:"image", src:"/images/fantastic-characters/003-dinosaur.png", x:13, y:53, w:20, h:20, transform: "scale(2, 2) rotate(45deg)", keepRatio: true},
                      {type:"image", src:"/images/fantastic-characters/049-wizard.png", x:70, y:50, w:20, h:20, transform: "scale(2)"}
                  ]
              },
              {
                  id:"2",
                  type:"",
                  background: '/images/backgrounds/sky.png',
                  components: [
                      {"type":"image", "src":"/images/fantastic-characters/010-phoenix.png", x:10, y:50},
                      {"type":"image", "src":"/images/fantastic-characters/045-fairy.png", x:70, y:60}
                  ]
              },
              {
                  id:"3",
                  type:"",
                  background: '/images/backgrounds/forest.png',
                  components: [
                      {"type":"image", "src":"/images/fantastic-characters/022-valkyrie.png", x:20, y:50},
                      {"type":"image", "src":"/images/fairytale/020-chest.png", x:70, y:50},
                      {"type":"image", "src":"/images/fairytale/027-key.png", x:60, y:70}
                  ]
              },
              {
                  id:"4",
                  type:"",
                  background: '/images/backgrounds/forest.png',
                  components: [
                      {"type":"image", "src":"/images/fantastic-characters/001-centaur.png", x:40, y:47},
                      {"type":"image", "src":"/images/fantastic-characters/004-tree-1.png", x:70, y:30}
                  ]
              }
          ]
      };
      return data.data;
    };

    useEffect(() => {
        dispatch(setSlideData(get_data()));
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