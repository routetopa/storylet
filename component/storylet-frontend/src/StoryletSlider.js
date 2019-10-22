import React, {useState, useEffect/*, useCallback*/} from 'react';
import './StoryletSlider.css';

import {MainContext} from './context/main-context'
import {ThemeProvider} from "styled-components";

import axios from 'axios';

import Slider from "./components/slider";
import Preview from "./components/preview";

function StoryletSlider()
{
    const [storyletsList, setStoryletsList] = useState({ filtered : [], all : [] });
    const [selectedStorylet, setSelectedStorylet] = useState({});
    const [globalInfo, /*setGlobalInfo*/] = useState({
        previewWidth : 300,
        main: "#2196F3;"
    });

    const get_storylet = async () =>
    {
        // let response = await axios.get('http://test.com/wp/wp-json/storylet/v1/storylet');
        // return response.data.data;

        let data = {"text":"hello","data":[
            {"id":"1", "name":"Anteprima Youtube",      "description":"La descrizione (dal latino descriptio[1], in inglese description) è l'atto di rappresentare con parole una determinata realtà[2]. Il concetto di descrizione può essere visto da un punto di vista epistemologico[3], cognitivo[4], scientifico, informatico[5], della filosofia del linguaggio[6], archivistico[7], bibliografico[8], ecc. Lo scopo di un testo descrittivo è quello di indicare al lettore o all'ascoltatore le caratteristiche di una certa realtà (persona, cosa, ecc.)[9]. La definizione scientifica invece indica la comunicazione di conoscenze che si possono interpretare in un solo modo[10].","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"309","src":"./img/anteprima_youtube.gif"},
            {"id":"2", "name":"Copertina di Facebook",  "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"209","src":"./img/copertina_di_facebook.jpg"},
            {"id":"3", "name":"Formato A4",             "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"393","height":"550","src":"./img/formato_A4.jpg"},
            {"id":"4", "name":"Grafica per Pinterest",  "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"367","height":"550","src":"./img/grafica_per_pinterest.jpg"},
            {"id":"5", "name":"Intestazione email",     "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"183","src":"./img/intestazione_email.jpg"},
            {"id":"6", "name":"Postdi Facebook",        "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"461","src":"./img/post_di_facebook.jpg"},
            {"id":"7", "name":"Postdi Instagram",       "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"550","src":"./img/post_di_instagram.jpg"},
            {"id":"8", "name":"Postdi Twitter",         "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"275","src":"./img/post_di_twitter.jpg"},
            {"id":"9", "name":"Poster",                 "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"389","height":"550","src":"./img/poster.jpg"},
            {"id":"10","name":"Titolo per blog",        "description":"description description description description","ownerId":"0","templateId":"0","themeId":"0",  "width":"550","height":"314","src":"./img/titolo_per_blog.jpg"}
        ]};

        return data.data
    };

    const search_handler = (evt) =>
    {
        let filtered = storyletsList.all.filter( (l) => {
            if(l.name.toLowerCase().includes(evt.target.value.toLowerCase()))
                return l;
            return null
        });

        setStoryletsList( (prevState) => { return {filtered: filtered, all: prevState.all} });
    };

    const storylet_click_handler = (evt, idx) =>
    {
        setSelectedStorylet(storyletsList.filtered[idx]);
    };

    useEffect(() => {
        get_storylet().then((data) => {
            setStoryletsList({filtered:data, all:data});
        });
    }, []);

    return (
    <>
        <MainContext.Provider value={globalInfo}>
            <ThemeProvider theme={globalInfo}>
                    <div className="header">
                        <div className="logo"> </div>
                    </div>
                    <div className="split-container">
                        <Slider storyletsList={storyletsList.filtered} storyletClickHandler={storylet_click_handler} searchHandler={search_handler} />
                        <Preview selectedLayout={selectedStorylet} />
                    </div>
            </ThemeProvider>
        </MainContext.Provider>
    </>
    );
}

export default StoryletSlider;