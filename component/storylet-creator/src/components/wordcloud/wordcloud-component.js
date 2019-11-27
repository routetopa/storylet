import React, {useState, useEffect, useRef} from 'react';
import 'd3-transition';
import { select } from 'd3-selection';
import ReactWordcloud from 'react-wordcloud'; // https://react-wordcloud.netlify.com/usage/options

export default function WordcloudComponent(response) {
    useEffect(()=>{
        if(response.words.length === 0)
            return;
        let words = [];
        for(let i=0; i<response.words.length; i++) {
            words.push({
                text: response.words[i].item,
                value: response.words[i].weight,
                color: colors[response.words[i].pos]
            });
        }
        setWords(words);
        console.log(words);
    }, [response]);

    const [words, setWords] = useState([]);

    const colors = {noun:'#4CAF50',adjective:'#F44336',verb:'#FF9800',adverb:'#2196F3'};

    const options = {
        fontSizes: [20, 100],
        rotations: 3,
        rotationAngles: [0, 90],
        padding: 1
    };

    const callbacks = {
        getWordColor: word => (word.color),
        getWordTooltip: word =>
            `La parola "${word.text}" ha un peso pari a ${word.value}.`,
        onWordClick: getCallback('onWordClick'),
        onWordMouseOut: getCallback('onWordMouseOut'),
        onWordMouseOver: getCallback('onWordMouseOver'),
    };

    function getCallback(callback) {
        return function(word, event) {
            const isActive = callback !== 'onWordMouseOut';
            const element = event.target;
            const text = select(element);
            text
                .on('click', () => {
                    if (isActive) {
                        window.open(`https://duckduckgo.com/?q=${word.text}`, '_blank');
                    }
                })
                .transition()
                // .attr('background', 'white')
                // .attr('font-size', isActive ? '300%' : '100%')
                .attr('text-decoration', isActive ? 'underline' : 'none');
        };
    }

    return (
        <>
            {(() => {console.log('RENDER WordcloudComponent')})()}
            <ReactWordcloud callbacks={callbacks} options={options} words={words} />
        </>
    )
};