import React from 'react'
import axios from 'axios';

import WordcloudContainer from './wordcloud-container'

import '../../vendor/bootstrap.min.css';
import '../../style/container/menu-container.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'

export default function MenuContainer() {

    // axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5', {
    //     text: 'cane',
    //     lang: 'it', // en fr de pt ru es
    //     type: 'response', // stimulus
    //     limit: '50', // max 300
    //     pos: 'noun,adjective,verb,adverb',
    //     indent: 'yes' // no
    // })
    // .then((response) => {
    //     console.log(response);
    // }, (error) => {
    //     console.log(error);
    // });

    https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5

    axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5&text=welcome&lang=en&limit=6')
        .then((response) => {
            console.log(response.data.response[0].items);
        }, (error) => {
            console.log(error);
        });


    return (
        <>
            <div id="menu-container">
                <div className="buttons" > </div>
                <div className="find-ideas">
                    <FontAwesomeIcon icon={faLightbulb} className="icon" />
                    <input className="form-control col-md-10 col-sm-10" />
                </div>
            </div>

            <WordcloudContainer />
        </>
    )
};