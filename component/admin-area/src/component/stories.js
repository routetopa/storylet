import React from 'react';
import { Table, Tag } from 'antd';

export default function test1()
{
    const stories = [
        {key: '1', title: 'Lucilla e Gastone volano insieme', description: 'La storia di lucilla e gastone', username:'IAuser01', tags: ['Minor']},
        {key: '2', title: 'Gastone il calabrone', description: 'Il calabrone', username:'IAuser01', tags: ['Medie']},
        {key: '3', title: 'Platanina la fogliolina', description: 'La fogliolina', username:'IAuser02', tags: ['Minor']},
        {key: '4', title: 'Un\'ape molto speciale', description: 'L\'ape', username:'IAuser02', tags: ['Minor']},
        {key: '5', title: 'Camilla la formica', description: 'La formica', username:'IAuser03', tags: ['Junior']},
        {key: '6', title: 'Enrico il lombrico', description: 'Il lombrico', username:'IAuser04', tags: ['Minor']},
        {key: '7', title: 'La quercia saggia sorride felice', description: 'La quercia', username:'IAuser05', tags: ['Medie']},
    ];

    const stories_columns = [
        {title: 'Titolo', dataIndex: 'title', key: 'title'},
        {title: 'Descrizione', dataIndex: 'description', key: 'description'},
        {title: 'Username', dataIndex: 'username', key: 'username'},
        {title: 'Tags', dataIndex: 'tags', key: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag[1] === 'e' ? 'geekblue' : 'green';
                        if (tag === 'Junior') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                  </span>
            )}
    ];

    return(
        <>
            <h1>Storie pubblicate</h1>
            <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                   dataSource={stories}
                   columns={stories_columns}
            />
        </>
    )
}