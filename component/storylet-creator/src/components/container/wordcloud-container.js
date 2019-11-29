import React, {useEffect, useRef} from 'react';

import '../../style/container/wordcloud-container.css'
import WordcloudComponent from "../wordcloud/wordcloud-component";

export default function WordcloudContainer(response) {

    //const [words, setWords] = useState([]);
    const coverContainer = useRef(false);

    useEffect(() =>
    {
        if (response.words.length)
            coverContainer.current.style.visibility = 'visible';
        else
            coverContainer.current.style.visibility = 'hidden';

    }, [response]);

    function hideWordcloud() {
        coverContainer.current.style.visibility = 'hidden';
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