import React, {useState, useEffect, useRef} from 'react';
import 'd3-transition';
import { select } from 'd3-selection';
import ReactWordcloud from 'react-wordcloud';
import axios from "axios"; // https://react-wordcloud.netlify.com/usage/options

import '../../style/container/wordcloud-container.css'

export default function WordcloudContainer({items}) {

    const colors = {noun:'#4CAF50',adjective:'#F44336',verb:'#FF9800',adverb:'#2196F3'};
    const coverContainer = useRef(false);
    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);

    useEffect(() =>
    {
        if (items && items.length) {
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
        } else {
            coverContainer.current.style.visibility = 'hidden';
        }
    }, [items]);

    function hideWordcloud() {
        // coverContainer.current.style.visibility = 'hidden';
    }

    // function wordAssociations(searchKey) {
    //     axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5&text=' + searchKey + '&lang=it&limit=50')
    //         .then((response) => {
    //             let items = response.data.response[0].items;
    //             if (items && items.length) {
    //                 let words = [];
    //                 for(let i=0; i<items.length; i++) {
    //                     words.push({
    //                         text: items[i].item,
    //                         value: items[i].weight,
    //                         color: colors[items[i].pos]
    //                     });
    //                 }
    //                 setWords(words);
    //
    //                 coverContainer.current.style.visibility = 'visible';
    //             } else {
    //                 coverContainer.current.style.visibility = 'hidden';
    //             }
    //         }, (error) => {
    //             console.log(error);
    //         });
    // }

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
        onWordMouseOver: getCallback('onWordMouseOver'),
    };

    function getCallback(callback) {
        return function(word, event) {
            const isActive = callback !== 'onWordMouseOut';
            const element = event.target;
            const text = select(element);
            text
                .on('click', () => {
                    let searchKey = word.text;
                    axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5&text=' + searchKey + '&lang=it&limit=50')
                        .then((response) => {
                            let items = response.data.response[0].items;
                            if(items.length === 0)
                                return;
                            let words = [];
                            for(let i=0; i<items.length; i++) {
                                words.push({
                                    text: items[i].item,
                                    value: items[i].weight,
                                    color: colors[items[i].pos]
                                });
                            }
                            setWords(words)
                        }, (error) => {
                            console.log(error);
                        });
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
                    <div id="path"> Percorso: <span>Cosa</span> / <span>fotocosa</span> / <span>Giancosa</span> </div>
                    {/*{(() => {console.log('RENDER WordcloudComponent')})()}*/}
                    <div id="wordcloud">
                        <ReactWordcloud callbacks={callbacks} options={options} words={words} />
                    </div>
                </div>
            </div>
        </>
    )
};