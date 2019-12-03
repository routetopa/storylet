import React, {useState, useEffect, useRef} from 'react';
import 'd3-transition';
import { select } from 'd3-selection';
import ReactWordcloud from 'react-wordcloud';
import axios from "axios"; // https://react-wordcloud.netlify.com/usage/options
import ReactDOM from 'react-dom';

import '../../style/container/wordcloud-container.css'
import {faLightbulb} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function WordcloudContainer({startingWord}) {

    const colors = {noun:'#4CAF50',adjective:'#F44336',verb:'#FF9800',adverb:'#2196F3'};
    const coverContainer = useRef(false);
    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState(null);

    useEffect(() =>
    {
        if(!startingWord)
            return;
        setSelectedWords([startingWord]);
        wordAssociations(startingWord);
    }, [startingWord]);

    useEffect(() =>
    {
        if (!selectedWords || selectedWords.length === 0)
            return;

        console.log(selectedWords);

        let span = []
        for (let i = 0; i < selectedWords.length; i++) {
            span.push( <span onClick={()=>{goToWordAssociations(i)}} key={i} >{selectedWords[i]}</span> );
            span.push( ' / ' );
        }

        ReactDOM.render(span, document.getElementById('selected-words'));
    }, [selectedWords]);

    function hideWordcloud() {
        // coverContainer.current.style.visibility = 'hidden';
    }

    function goToWordAssociations(i) {
        debugger
        let searchKey = selectedWords[i];
        let temp = selectedWords.slice();
        temp.splice(i+1);
        let temp2 = temp.slice();
        setSelectedWords(temp2);

        wordAssociations(searchKey);
    }

    function wordAssociations(searchKey) {
        // text: 'cane',
        // lang: 'it', // en fr de pt ru es
        // type: 'response', // stimulus
        // limit: '50', // max 300
        // pos: 'noun,adjective,verb,adverb',
        // indent: 'yes' // no
        axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5&text=' + searchKey + '&lang=it&limit=50')
            .then((response) => {
                let items = response.data.response[0].items;
                // if (items && items.length) {
                    let words = [];
                    for(let i=0; i<items.length; i++) {
                        words.push({
                            text: items[i].item,
                            value: items[i].weight,
                            color: colors[items[i].pos]
                        });
                    }
                    setWords(words);

                    coverContainer.current.style.visibility = 'visible';
                // } else {
                //     coverContainer.current.style.visibility = 'hidden';
                // }
            }, (error) => {
                console.log(error);
            });
    }

    const options = {
        fontSizes: [20, 100],
        rotations: 3,
        rotationAngles: [0, 90],
        fontFamily: '"Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif',
        padding: 10,
        transitionDuration: 1000
    };

    const callbacks = {
        getWordColor: word => (word.color),
        getWordTooltip: word =>
            `La parola "${word.text}" ha un peso pari a ${word.value}.`,
        onWordClick: getCallback('onWordClick'),
        onWordMouseOut: getCallback('onWordMouseOut'),
        onWordMouseOver: getCallback('onWordMouseOver')
    };

    function getCallback(callback) {
        return function(word, event) {
            const isActive = callback !== 'onWordMouseOut';
            const element = event.target;
            const text = select(element);
            text
                .on('click', () => {
                    debugger
                    //todo concat
                    selectedWords.push(word.text);
                    let temp = selectedWords.slice();
                    setSelectedWords(temp);

                    wordAssociations(word.text);
                })
                // .transition()
                // .attr('background', 'white')
                // .attr('font-size', isActive ? '300%' : '100%')
                .attr('text-decoration', isActive ? 'underline' : 'none');
        };
    }

    return (
        <>
            <div id="cover-container" ref={coverContainer} onClick={hideWordcloud}>
                <div id="wordcloud-container">
                    <div id="path">
                        <FontAwesomeIcon icon={faLightbulb} className="icon" />
                        <div id="selected-words"> </div>
                    </div>
                    <div id="wordcloud">
                        <ReactWordcloud callbacks={callbacks} options={options} words={words} />
                    </div>
                </div>
            </div>
        </>
    )
};