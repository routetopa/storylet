import React, {useEffect, useState} from 'react';
import { Table } from 'antd';
import axios from "axios";

export default function Stories()
{
    const [data, setData] = useState(null);
    const [students, setStudents] = useState(null);

    useEffect(() =>
    {
        fetch_data();
    }, []);

    const fetch_data = async () => {
        let response = await axios.get(window.API_ENDPOINT.GET_CLASS,
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        let data = [];
        let students = [];

        response.data.data.forEach((cl) => {
            students = [...students, ...cl.students];
            cl.stories.forEach((st) => {
                if(parseInt(st.status) === 1)
                    data.push(st)
            })
        });

        setStudents(students);
        setData(data);
    };

    const stories_columns = [
        {title: 'Titolo', key: 'name',
            render: (text, record, index) => {
                let metadata = JSON.parse(record.metadata);
                return metadata.name
            }
        },
        {title: 'Descrizione', key: 'description',
            render: (text, record, index) => {
                let metadata = JSON.parse(record.metadata);
                return metadata.description
            }
        },
        {title: 'Username', key: 'ownerId',
            render: (text, record, index) =>
            {
                let res = students.find(
                    (e) => (e.userId === record.ownerId)
                );
                return `${res.name} ${res.surname} (${res.username})`;
            }
        }
    ];

    return(
        <>
            <h1>Storie pubblicate</h1>
            <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                   dataSource={data}
                   columns={stories_columns}
                   rowKey='id'
            />
        </>
    )
}