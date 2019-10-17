import React, {useState, useEffect/*, useCallback*/} from 'react';
import axios from 'axios';
import './App.css';

import GlobalStyle from './style/global-style';
import {MainContext} from './context/main-context'
import {ThemeProvider} from "styled-components";

import LayoutHeaderContainer from "./container/layout-header";
import LayoutContainer from './container/layout-container';
import LayoutDescriptionContainer from './container/layout-description-container';

function App()
{
    const [layout, setLayout] = useState({ filtered : [], all : [] });
    const [selectedLayout, setSelectedLayout] = useState({});
    const [globalInfo, /*setGlobalInfo*/] = useState({
        layoutWidth : 300,
        layoutContainerSpace: 0.8,
        main: "mediumseagreen"
    });

    const get_layouts = async () =>
    {
        // let response = await axios.get('http://test.com/wp/wp-json/storylet/v1/storylet');
        // return response.data.data;

        let data = {"text":"hello","data":[
            {"id":"1", "name":"Anteprima Youtube",      "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"309","src":"./img/anteprima_youtube.jpg"},
            {"id":"2", "name":"Copertina di Facebook",  "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"209","src":"./img/copertina_di_facebook.jpg"},
            {"id":"3", "name":"Formato A4",             "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"393","height":"550","src":"./img/formato_A4.jpg"},
            {"id":"4", "name":"Grafica per Pinterest",  "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"367","height":"550","src":"./img/grafica_per_pinterest.jpg"},
            {"id":"5", "name":"Intestazione email.jpg", "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"183","src":"./img/intestazione_email.jpg"},
            {"id":"6", "name":"Postdi Facebook.jpg",    "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"461","src":"./img/post_di_facebook.jpg"},
            {"id":"7", "name":"Postdi Instagram.jpg",   "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"550","src":"./img/post_di_instagram.jpg"},
            {"id":"8", "name":"Postdi Twitter.jpg",     "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"275","src":"./img/post_di_twitter.jpg"},
            {"id":"9", "name":"Poster.jpg",             "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"389","height":"550","src":"./img/poster.jpg"},
            {"id":"10","name":"Titolo per blog.jpg",    "description":"","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"314","src":"./img/titolo_per_blog.jpg"}
        ]};

        return data.data
    };

    const search_handler = (evt) =>
    {
        let filtered = layout.all.filter( (l) => {
            if(l.name.toLowerCase().includes(evt.target.value.toLowerCase()))
                return l;
            return null
        });

        setLayout( (prevState) => { return {filtered: filtered, all: prevState.all} });
    };

    const layout_click_handler = (evt, idx) =>
    {
        setSelectedLayout(layout.filtered[idx]);
    };

    // Fetch data then set state of layout
    useEffect(() => {
        get_layouts().then((data) => {
            setLayout({filtered:data, all:data});
        });
    }, []);

    return (
    <>
        <ThemeProvider theme={globalInfo}>
            <GlobalStyle/>
            <MainContext.Provider value={globalInfo}>
                <LayoutHeaderContainer/>
                <LayoutContainer layouts={layout.filtered}
                                 searchHandler={search_handler}
                                 layoutClickHandler={layout_click_handler} />
                <LayoutDescriptionContainer selectedLayout={selectedLayout} />
            </MainContext.Provider>
        </ThemeProvider>
    </>
    );
}

export default App;