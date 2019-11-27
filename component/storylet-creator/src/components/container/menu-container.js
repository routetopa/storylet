import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

import WordcloudContainer from './wordcloud-container'

import '../../vendor/bootstrap.min.css';
import '../../style/container/menu-container.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

export default function MenuContainer() {

    // const [searchKey, setSearchKey] = useState('');
    const [words, setWords] = useState([]);
    const searchKey = useRef(null);

    // {
    //     text: 'cane',
    //     lang: 'it', // en fr de pt ru es
    //     type: 'response', // stimulus
    //     limit: '50', // max 300
    //     pos: 'noun,adjective,verb,adverb',
    //     indent: 'yes' // no
    // }

    const get_words = async () =>
    {
        axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5&text=' + searchKey.current.value + '&lang=it&limit=50')
            .then((response) => {
                setWords(response.data.response[0].items)
            }, (error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div id="menu-container">
                <div className="buttons" > </div>
                <div className="find-ideas">
                    <FontAwesomeIcon icon={faLightbulb} className="icon" onClick={get_words} />
                    <input id="SearchKey" ref={searchKey} className="form-control col-md-10 col-sm-10" />
                </div>
            </div>

            <WordcloudContainer words={words} />
        </>
    )
};