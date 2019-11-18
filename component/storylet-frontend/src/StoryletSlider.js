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
        let response = await axios.get(window.API_ENDPOINT.GET_STORYLET_TEMPLATE,
                                    { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });

        if(response.data.status === 'OK')
            return response.data.data;

        return [];

        /*let data = {"status":"OK","data":[{"id":"1","name":"Test 1","description":"Description 1","type":"","tag":["tag1","tag2","tag10"],"slideTemplateList":"[]","width":"550","height":"209","src":"https:\/\/picsum.photos\/id\/10\/550\/209"},{"id":"2","name":"Test 2","description":"Description 2","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"393","height":"550","src":"https:\/\/picsum.photos\/id\/1002\/393\/550"},{"id":"3","name":"Test 3","description":"Description 3","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"367","height":"550","src":"https:\/\/picsum.photos\/id\/1005\/367\/550"},{"id":"4","name":"Test 4","description":"Description 4","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"550","height":"183","src":"https:\/\/picsum.photos\/id\/1012\/550\/183"},{"id":"5","name":"Test 5","description":"Description 5","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"550","height":"461","src":"https:\/\/picsum.photos\/id\/1015\/550\/461"},{"id":"6","name":"Test 6","description":"Description 6","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"550","height":"550","src":"https:\/\/picsum.photos\/id\/1016\/550\/550"},{"id":"7","name":"Test 7","description":"Description 7","type":"","tag":["tag1","tag2","tag3","facebook"],"slideTemplateList":"[]","width":"550","height":"275","src":"https:\/\/picsum.photos\/id\/1018\/550\/275"},{"id":"8","name":"Test 8","description":"Description 8","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"389","height":"550","src":"https:\/\/picsum.photos\/id\/1019\/389\/550"},{"id":"9","name":"Test 9","description":"Description 9","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"550","height":"314","src":"https:\/\/picsum.photos\/id\/1031\/550\/314"},{"id":"10","name":"Test 10","description":"Description 10","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"550","height":"209","src":"https:\/\/picsum.photos\/id\/1032\/550\/209"},{"id":"11","name":"Test 11","description":"Description 11","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"550","height":"208","src":"https:\/\/picsum.photos\/id\/1035\/550\/208"},{"id":"12","name":"Test 12","description":"Description 12","type":"","tag":["tag1","tag2","tag3"],"slideTemplateList":"[]","width":"550","height":"461","src":"https:\/\/picsum.photos\/id\/1042\/550\/461"}]};
        return data.data*/
    };

    const search_handler = (evt) =>
    {
        let filtered = storyletsList.all.filter( (l) => {
            if(l.name.toLowerCase().includes(evt.target.value.toLowerCase()) ||
                l.description.toLowerCase().includes(evt.target.value.toLowerCase()) ||
                 tag_filter(l.tag, evt.target.value.toLowerCase()))
                return l;
            return null
        });

        setStoryletsList( (prevState) => { return {filtered: filtered, all: prevState.all} });
    };

    const tag_filter = (tag_array, search_string) =>
    {
        for(const tag of tag_array)
            if(tag.toLowerCase().includes(search_string))
                return true;
        return false;
    };

    const storylet_click_handler = (evt, idx) =>
    {
        setSelectedStorylet(storyletsList.filtered[idx]);
    };

    const createCallback = async () =>
    {
        console.log('CREATE');

        axios.post(window.API_ENDPOINT.CREATE_STORYLET, {
            storyletTemplate: selectedStorylet,
        }, { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } }
        ).then(function (response) {
            console.log(response);
            window.open(`${window.API_ENDPOINT.STORYLET_CREATOR_URL}${response.data.created_storylet_id}`, "_self");
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    useEffect(() => {
        get_storylet().then((data) => {
            setStoryletsList({filtered:data, all:data});
            setSelectedStorylet(data ? data[0] : null);
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
                        <Preview selectedLayout={selectedStorylet} createCallback={createCallback} />
                    </div>
            </ThemeProvider>
        </MainContext.Provider>
    </>
    );
}

export default StoryletSlider;