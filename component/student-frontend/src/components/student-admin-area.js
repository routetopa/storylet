import React, {useState, useEffect} from 'react';
import { Layout, Menu, Avatar, Icon, Table } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const { Content, Footer, Sider } = Layout;

export default function StudentAdminArea()
{
    useEffect(() =>
    {
        fetch_data();
    }, []);

    const fetch_data = async () => {
        let response = await axios.get(window.API_ENDPOINT.GET_CLASS,
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        //setClasses(response.data.data);
        return response.data.data;
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
                               dataSource={[]}
                               rowKey='id'
                               columns={[]}
                        />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Storylet Admin by ISISLab</Footer>
                </Layout>

            </Layout>
        </>
    )
}