import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import ReactWordcloud from "react-wordcloud";
import 'antd/dist/antd.css';
import {Table} from 'antd';
import '../../style/container/babelnet-container.css'
import {useSelector} from "react-redux";
import {translate} from "../helpers";

// TODO merge & delete lemmas

export default function BabelnetContainer({startingWord}) {

    const ln = useSelector(state => state.selectedLanguage);

    const source = null;

    const [synsetIds, setSynsetIds] = useState(null);
    const key = '91373219-3631-4c81-8c7b-5f8ae29776ee';
    const lang = ln;

    const [dataSource, setDataSource] = useState([]);

    const columns = [
        {
            title: translate('fullLemma', ln),
            dataIndex: 'properties.fullLemma',
            key: 'fullLemma',
            // render: (text, record, index) => {
            //     return (
            //         record.properties.fullLemma + ' (' + record.properties.source + ')'
            //     )
            // },
            sorter: (a, b) => a.properties.fullLemma.localeCompare(b.properties.fullLemma),
        },
        // {
        //     title: 'Source',
        //     dataIndex: 'properties.source',
        //     key: 'source',
        //     sorter: (a, b) => a.properties.source.localeCompare(b.properties.source),
        // },
        // {
        //     title: 'Synset ID',
        //     dataIndex: 'properties.synsetID.id',
        //     key: 'source',
        //     sorter: (a, b) => a.properties.synsetID.id.localeCompare(b.properties.synsetID.id),
        // }
    ];

    useEffect(() => {
        if(!startingWord || startingWord.length === 0)
            return;
        // console.log("BabelnetContainer"); // https://babelnet.org/guide

        getSenses(startingWord, lang, lang, null, source);
        // getSynset("bn:00015983n", lang);

    }, [startingWord]);

    // useEffect(() => {
    //     if(!synsetIds)
    //         return;
    //     console.log(synsetIds);
    // }, [synsetIds]);

    function getSynsetIds(lemma, searchLang, targetLang, pos, source) {
        axios.get('https://babelnet.io/v5/getSynsetIds?lemma=' + lemma + '&searchLang=' + searchLang + '&targetLang=' + targetLang + '&key=' + key)
            .then((response) => {
                //todo
            }, (error) => {
                console.log(error);
            });
    }

    function getSynset(id, targetLang) {
        axios.get('https://babelnet.io/v5/getSynset?id=' + id + '&targetLang=' + targetLang + '&key=' + key)
            .then((response) => {
                let items = response.data.senses;
                let words = [];
                for(let i=0; i<items.length; i++) {
                    words.push({
                        text: items[i].properties.fullLemma,
                        value: items[i].properties.frequency+1,
                        color: "#000000"
                    });
                }
                setWords(words);
                let glosses = 'GLOSS: ';
                if(response.data.glosses) {
                    for(let i=0; i<response.data.glosses.length; i++)
                        glosses += ' ' + response.data.glosses[i].gloss
                    setGloss(glosses);
                }
                //todo
            }, (error) => {
                console.log(error);
            });
    }

    function getSenses(lemma, searchLang, targetLang, pos, source) {
        axios.get('https://babelnet.io/v5/getSenses?lemma=' + lemma + '&searchLang=' + searchLang + '&targetLang=' + targetLang + (pos ? '&source=' + pos : '') + (source ? '&source=' + source : '') + '&key=' + key)
            .then((response) => {
                // console.log(response)
                let synsetIds = [];
                let _dataSource = [];
                for(let i=0; i< response.data.length; i++) {
                    if(synsetIds.indexOf(response.data[i].properties.synsetID.id) > -1)
                        continue;
                    synsetIds.push(response.data[i].properties.synsetID.id);
                    _dataSource.push(response.data[i]);
                }
                setDataSource(_dataSource);
                //todo
            }, (error) => {
                console.log(error);
            });
    }

    function getOutgoingEdges(id) {
        axios.get('https://babelnet.io/v5/getOutgoingEdges?id=' + id + '&key=' + key)
            .then((response) => {
                //todo
            }, (error) => {
                console.log(error);
            });
    }

    // TABLE

    const onRow = (record, rowIndex) => {
        return {
            onClick: event => {
                getSynset(event.currentTarget.dataset.rowKey, lang);
            }, // click row
            onDoubleClick: event => {}, // double click row
            onContextMenu: event => {}, // right button click row
            onMouseEnter: event => {}, // mouse enter row
            onMouseLeave: event => {}, // mouse leave row
        };
    };

    // WORDCLOUD

    const [words, setWords] = useState([]);
    const [gloss, setGloss] = useState([]);

    const options = {
        fontSizes: [20, 100],
        rotations: 3,
        rotationAngles: [0, 90],
        fontFamily: '"Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif',
        padding: 10,
        transitionDuration: 1000
    };

    const callbacks = {

    };

    return (
        <div className="babelnet-container">
            <div className="babelnet-table">
                <Table dataSource={dataSource} columns={columns} rowKey={record => record.properties.synsetID.id} size="middle" onRow={onRow} />
            </div>
            <div className="babelnet-wordcloud">
                <div id="babelnet-gloss">
                    <div id="gloss">{gloss}</div>
                </div>
                <div id="babelnet-words">
                    <ReactWordcloud callbacks={callbacks} options={options} words={words} />
                </div>
            </div>
        </div>
    )
};