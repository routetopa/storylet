import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
// import 'antd/dist/antd.css';
import {Table} from 'antd';
import '../../style/container/rhymebrain-container.css'
import {useSelector} from "react-redux";
import {translate} from "../helpers";

export default function RhymebrainContainer({startingWord}) {

    const ln = useSelector(state => state.selectedLanguage);

    const [dataSource, setDataSource] = useState([]);

    const columns = [
        {
            title: translate('word', ln),
            dataIndex: 'word',
            key: 'word',
            sorter: (a, b) => a.word.localeCompare(b.word),
        },
        {
            title: translate('score', ln),
            dataIndex: 'score',
            key: 'score',
            sorter: (a, b) => a.score - b.score,
        },
        // {
        //     title: translate('frequency', ln),
        //     dataIndex: 'freq',
        //     key: 'freq',
        //     sorter: (a, b) => a.freq - b.freq,
        // },
        {
            title: translate('syllables', ln),
            dataIndex: 'syllables',
            key: 'syllables',
            sorter: (a, b) => a.syllables - b.syllables,
        }
    ];

    useEffect(() =>
    {
        if(!startingWord || startingWord.length === 0)
            return;
        // console.log("RhymebrainContainer");

        axios.get('https://rhymebrain.com/talk?function=getRhymes&word=' + startingWord + '&lang=' + ln)
            .then((response) => {
                setDataSource(response.data);
            }, (error) => {
                console.log(error);
            });

    }, [startingWord]);

    return (
        <div className="rhymebrain-container">
            <Table dataSource={dataSource} columns={columns} rowKey="word" size="middle" />
        </div>
    )
};