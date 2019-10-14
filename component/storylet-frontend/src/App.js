import React, {useState, useEffect/*, useCallback*/} from 'react';
import axios from 'axios';
import './App.css';

import GlobalStyle from './style/global-style';
import {MainContext} from './context/main-context'

import LayoutContainer from './container/layout-container';
import LayoutDescriptionContainer from './container/layout-description-container';


function App()
{
    const [layout, setLayout] = useState({ filtered : [], all : [] });
    const [selectedLayout, setSelectedLayout] = useState({});
    const [globalInfo, /*setGlobalInfo*/] = useState({layoutWidth : 300});

    const get_layouts = async () =>
    {
        let response = await axios.get('http://test.com/wp/wp-json/storylet/v1/storylet');
        return response.data.data;
    };

    const search_handler = (evt) =>
    {
        let filtered = layout.all.filter( (l) => {
            if(l.description.toLowerCase().includes(evt.target.value.toLowerCase()))
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
         <GlobalStyle/>
         <MainContext.Provider value={globalInfo}>
             <LayoutContainer layouts={layout.filtered}
                              searchHandler={search_handler}
                              layoutClickHandler={layout_click_handler} />
             <LayoutDescriptionContainer selectedLayout={selectedLayout} />
          </MainContext.Provider>
       </>
    );
}

export default App;