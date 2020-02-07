import React, {useState, useEffect} from 'react';
import { Layout, Menu, Avatar, Icon, Table, Tooltip, Popconfirm, Tag } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const { Content, Footer, Sider } = Layout;

export default function StudentAdminArea()
{
    const deleteStorylet = async (data) =>
    {
        console.log(data);
        let response = await axios.delete(`${window.API_ENDPOINT.CRUD_STORYLET}/${data.id}`,
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        if(response.data.status === 'OK')
        {
            fetch_data();
        }
    };

    const [studentStory, setStudentStory] = useState([]);

    const studentStoryColumn = [
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
            }},
        {title: 'Azioni',   key: 'action',
            render: (text, record, index) =>
            {
                return (
                    <div>
                        {(!record.status || record.status === "0") ? (
                        <Icon theme="filled"
                              style={{fontSize:'24px', cursor:'pointer', marginRight:'24px'}}
                              type="edit"
                              onClick={() => window.open(`${window.API_ENDPOINT.STORYLET_CREATOR}/${record.id}`,'_blank')}
                        /> ) : null}
                        <Icon theme="filled"
                              style={{fontSize:'24px', cursor:'pointer', marginRight:'24px'}}
                              type="play-circle"
                              onClick={() => window.open(`${window.API_ENDPOINT.STORYLET_VIEWER}/${record.id}`,'_blank')}
                        />
                        {(!record.status || record.status === "0") ? (
                        <Popconfirm title="Sure to ?" onConfirm={() => deleteStorylet(record)}>
                            <Icon theme="filled"
                                  style={{fontSize:'24px', cursor:'pointer'}}
                                  type="delete"
                            />
                        </Popconfirm> ) : null}
                    </div>
                )
            }
        },
        {title: 'Stato', key: 'status',
            render: (text, record, index) =>
            {
                let published = (record.status && record.status === "1");

                return (
                    <Tag color={published ? 'green' : 'red'} key={record.status}>
                        {published ? 'Pubblica' : 'Privata'}
                    </Tag>
                )
            }
        },
    ];


    useEffect(() =>
    {
        fetch_data();
    }, []);

    const fetch_data = async () => {
        let response = await axios.get(window.API_ENDPOINT.GET_MY_STORY,
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        setStudentStory(response.data.data);
    };


    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>

                <Sider collapsible>

                    <div style={{ width:'100%', textAlign: 'center', 'padding': '16px' }}>
                        <div style={{color:'#ffffff', marginBottom: '8px'}}>Ciao {`${window.USER_INFO.name} ${window.USER_INFO.surname}`}</div>
                        <Avatar size={64} icon="user" />
                    </div>

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="team" />
                            <span>Le mie storie</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout>
                    <Content style={{ margin: '16px' }}>
                        <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                               dataSource={studentStory}
                               rowKey='id'
                               columns={studentStoryColumn}
                        />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Storylet Admin by ISISLab</Footer>
                </Layout>

            </Layout>
        </>
    )
}