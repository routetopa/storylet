import React, {useState, useEffect, useRef} from 'react';

import WordcloudContainer from './wordcloud-container'
import RhymebrainContainer from './rhymebrain-container'
import BabelnetContainer from './babelnet-container'

import '../../style/container/word-container.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb} from "@fortawesome/free-regular-svg-icons";

import {translate} from "../helpers";
import {useSelector} from "react-redux";

export default function WordContainer({startingWord})
{
    const selectedLanguage = useSelector(state => state.selectedLanguage);

    const coverContainer = useRef(false);
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() =>
    {
        if(!startingWord || startingWord.length === 0)
            return;
        setSelectedTab(0);
        coverContainer.current.style.visibility = 'visible';
    }, [startingWord]);

    function hideWordcloud() {
        coverContainer.current.style.visibility = 'hidden';
    }

    function selectTab(e) {
        setSelectedTab(e._targetInst.index-1);
    }

    return (
        <div id="cover-container" ref={coverContainer}>
            <div id="wordcloud-container">
                <FontAwesomeIcon id="wordcloud-close" icon={faTimes} className="icon" onClick={hideWordcloud} />
                <div className="word-tabs">
                    <div className="word-tab"><FontAwesomeIcon icon={faLightbulb} className="icon" /> {startingWord}</div>
                    <div className={selectedTab === 0 ? "word-tab selected" : "word-tab"} onClick={selectTab}>{translate('analogies', selectedLanguage)}</div>
                    <div className={selectedTab === 1 ? "word-tab selected" : "word-tab"} onClick={selectTab}>{translate('synonyms', selectedLanguage)}</div>
                    <div className={selectedTab === 2 ? "word-tab selected" : "word-tab"} onClick={selectTab}>{translate('rhymes', selectedLanguage)}</div>
                </div>
                <div className="word-body">
                    <div className={selectedTab === 0 ? "tab-content selected" : "tab-content"}>
                        <WordcloudContainer startingWord={startingWord} />
                    </div>
                    <div className={selectedTab === 1 ? "tab-content selected" : "tab-content"}>
                        <BabelnetContainer startingWord={startingWord} />
                    </div>
                    <div className={selectedTab === 2 ? "tab-content selected" : "tab-content"}>
                        <RhymebrainContainer startingWord={startingWord} />
                    </div>
                </div>
            </div>
        </div>
    )
};