import React, {useState, useEffect/*, useCallback*/} from 'react';
import axios from 'axios';
import './App.css';

import GlobalStyle from './style/global-style';

import LayoutContainer from './container/layout-container';
import LayoutDescriptionContainer from './container/layout-description-container';


function App()
{
    const [layout, setLayout] = useState({
        filtered : [],
        all : []
    });

    const [selectedLayout, setSelectedLayout] = useState({});

    const get_layouts = async () => {
        /*let response = await axios.get('http://test.com/wp/wp-json/storylet/v1/storylet');
        return response.data.data;*/

        let data = JSON.parse('{"text":"hello","data":[{"id":"1","name":"Uno","description":"uno description facebook","ownerId":"0","templateId":"0","themeId":"0"},{"id":"2","name":"Due","description":"due description","ownerId":"0","templateId":"0","themeId":"0"},{"id":"3","name":"Tre","description":"tre description","ownerId":"0","templateId":"0","themeId":"0"},{"id":"4","name":"Quattro","description":"quattro description facebook","ownerId":"0","templateId":"0","themeId":"0"},{"id":"5","name":"Cinque","description":"cinque description","ownerId":"0","templateId":"0","themeId":"0"},{"id":"6","name":"Sei","description":"sei description","ownerId":"0","templateId":"0","themeId":"0"},{"id":"7","name":"Sette","description":"sette description facebook","ownerId":"0","templateId":"0","themeId":"0"},{"id":"8","name":"Otto","description":"otto description","ownerId":"0","templateId":"0","themeId":"0"},{"id":"9","name":"Nove","description":"nove description","ownerId":"0","templateId":"0","themeId":"0"},{"id":"10","name":"Dieci","description":"dieci description facebook","ownerId":"0","templateId":"0","themeId":"0"}]}');
        return data.data
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

    useEffect(() => {
        get_layouts().then((data) => {
            setLayout({filtered:data, all:data});
        });
    }, []);

    return (
       <>
         <GlobalStyle/>
         <LayoutContainer layouts={layout.filtered}
                          searchHandler={search_handler}
                          layoutClickHandler={layout_click_handler} />
         <LayoutDescriptionContainer selectedLayout={selectedLayout} />
       </>
    );
}

export default App;