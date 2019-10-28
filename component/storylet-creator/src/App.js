import React, {useState, useEffect} from 'react';
import HeaderContainer from './container/header-container'
import BodyContainer from './container/body-container'
import GlobalStyle from './style/global-style'
import {useDispatch} from 'react-redux'
import setSlideData from './actions/set-slide-data'

function App()
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
                  "id":"1",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world from slide 1 a", x:100, y:10},
                      {"type":"text", "value":"Hello world from slide 1 b", x:100, y:40},
                      {"type":"text", "value":"Hello world from slide 1 c", x:100, y:70},
                      {"type":"text", "value":"Hello world from slide 1 d", x:100, y:100},
                      {"type":"text", "value":"Hello world from slide 1 e", x:100, y:130},
                      {"type":"image", "src":"https://picsum.photos/100/100", x:10, y:170}
                  ]
              },
              {
                  "id":"2",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 2", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"3",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 3", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"4",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 4", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"5",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 5", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"6",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 6", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"7",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 7", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"8",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 8", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"9",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 9", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              },
              {
                  "id":"10",
                  type:"",
                  "components": [
                      {"type":"text", "value":"Hello world again by slide 10", x:20, y:20},
                      {"type":"image", "src":"https://picsum.photos/150/100", x:80, y:50}
                  ]
              }
          ]
      };
      return data.data;
    };

    // Fetch data then set state of layout
    useEffect(() => {
        dispatch(setSlideData(get_data()));
    }, []);

    console.log('APP');

    return (
     <>
        <GlobalStyle/>
        <HeaderContainer />
        <BodyContainer />
     </>
    );
}

export default App;
