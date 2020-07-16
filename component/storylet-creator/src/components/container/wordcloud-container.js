import React, {useState, useEffect} from 'react';
import 'd3-transition';
import { select } from 'd3-selection';
import ReactWordcloud from 'react-wordcloud';
import axios from "axios"; // https://react-wordcloud.netlify.com/usage/options
import ReactDOM from 'react-dom';

import '../../style/container/wordcloud-container.css'
import {useSelector} from "react-redux";
import {translate} from "../helpers";

export default function WordcloudContainer({startingWord}) {

    const ln = useSelector(state => state.selectedLanguage);

    const colors = {noun:'#4CAF50',adjective:'#F44336',verb:'#FF9800',adverb:'#2196F3'};
    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState(null);
    const [clickedWord, setClickedWord] = useState(null);
    const [_loaderVisibility, setLoaderVisibility] = useState('hidden');
    // const [_loaderCoverVisibility, setLoaderCoverVisibility] = useState('hidden');

    useEffect(() =>
    {
        if(!startingWord || startingWord.length === 0)
            return;
        setSelectedWords(startingWord.slice());
        wordAssociations(startingWord[0]);
    }, [startingWord]);

    useEffect(() =>
    {
        if (!selectedWords || selectedWords.length === 0)
            return;

        let span = [];
        for (let i = 0; i < selectedWords.length; i++) {
            span.push( <span onClick={()=>{goToWordAssociations(i)}} key={i} >{selectedWords[i]}</span> );
            span.push( ' / ' );
        }

        ReactDOM.render(span, document.getElementById('selected-words'));
    }, [selectedWords]);

    useEffect(() =>
    {
        if (!selectedWords || selectedWords.length === 0)
            return;

        // selectedWords.push(word.text);
        let temp = selectedWords.slice();
        temp.push(clickedWord);
        setSelectedWords(temp);

    }, [clickedWord]);

    function goToWordAssociations(i) {
        //todo?
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
        setLoaderVisibility('visible');
        // setLoaderCoverVisibility('visible');
        axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5&text=' + searchKey + '&lang=' + ln + '&limit=50')
            .then((response) => {
                let items = response.data.response[0].items;
                    let words = [];
                    for(let i=0; i<items.length; i++) {
                        words.push({
                            text: items[i].item,
                            value: items[i].weight,
                            color: colors[items[i].pos]
                        });
                    }
                    setTimeout(()=>setLoaderVisibility('hidden'), 2000);
                    // setTimeout(()=>setLoaderCoverVisibility('hidden'), 4000);
                    if(words.length===0)
                        setWords([{text: "NESSUN RISULTATO", value: 100, color: "#000"}]);//todo translate
                    else
                        setWords(words);
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
            `La parola "${word.text}" ha una rilevanza pari a ${word.value}.`,//todo translate
        onWordClick: getCallback('onWordClick'),
        onWordMouseOut: getCallback('onWordMouseOut'),
        onWordMouseOver: getCallback('onWordMouseOver')
    };

    function getCallback(callback) {
        return function(word, event) {
            const isActive = callback !== 'onWordMouseOut';
            const element = event.target;
            const text = select(element);
            text.on('click', () => {
                // //todo?
                // selectedWords.push(word.text);
                // let temp = selectedWords.slice();
                // // temp.push(word.text);
                // setSelectedWords(temp);
                setClickedWord(word.text);

                wordAssociations(word.text);
            })
            // .transition()
            // .attr('background', 'white')
            .attr('text-decoration', isActive ? 'underline' : 'none');
    };
    }

    return (
        <>
            <div id="path">
                {translate('path', ln)}:&nbsp;<div id="selected-words"> </div>
            </div>
            <div id="wordcloud">
                {/*<div className={"wc-hidden-loader"} style={{visibility: _loaderCoverVisibility}}> </div>*/}
                <div className={"wc-loader"} style={{visibility: _loaderVisibility}}>
                    <svg>
                        <circle
                            className="loader"
                            r="20" cx="50%" cy="50%"
                            fill="none"
                            stroke-width="4"
                            stroke="#6BBBFA"
                        />
                    </svg>
                </div>
                <ReactWordcloud callbacks={callbacks} options={options} words={words} />
            </div>
        </>
    )
};