import React, {useState, useEffect, useRef} from 'react';

import '../../style/container/wordcloud-container.css'
import WordcloudComponent from "../wordcloud/wordcloud-component";

export default function WordcloudContainer(response) {

    const coverContainer = useRef(false);

    useEffect(()=>{
        if (response.words.length)
            coverContainer.current.style.display = 'block';
        else
            coverContainer.current.style.display = 'none';
    }, [response]);

    function hideWordcloud() {
        coverContainer.current.style.display = 'none';
    }

    return (
        <>
            <div id="cover-container" ref={coverContainer} onClick={hideWordcloud}>
                <div id="wordcloud-container">
                    <WordcloudComponent words={response.words} />
                </div>
            </div>
        </>
    )
};