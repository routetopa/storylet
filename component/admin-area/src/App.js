import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon, Avatar } from 'antd';
import TeacherClass from './component/teacher-class';
import Stories from './component/stories';

const { Content, Footer, Sider } = Layout;

function App()
{
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed( collapsed );
    };

  return (
      <>
          <Router basename={`${window.API_ENDPOINT.SITE_URL}admin-area/`}>
              <Layout style={{ minHeight: '100vh' }}>

                  <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>

                      <div style={{ width:'100%', textAlign: 'center', 'padding': '16px' }}>
                          <div style={{color:'#ffffff', marginBottom: '8px'}}>Ciao {`${window.USER_INFO.name} ${window.USER_INFO.surname}`}</div>
                          <Avatar size={64} icon="user" />
                      </div>

                      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                          <Menu.Item key="1">
                              <Icon type="team" />
                              <span>Classi</span>
                              <Link to="/" />
                          </Menu.Item>
                          <Menu.Item key="2">
                              <Icon type="highlight" />
                              <span>Storie pubblicate</span>
                              <Link to="/stories" />
                          </Menu.Item>
                      </Menu>
                  </Sider>

                  <Layout>
                      <Content style={{ margin: '16px' }}>

                          <Route exact path="/" component={TeacherClass} />
                          <Route       path="/stories" component={Stories} />

                      </Content>
                      <Footer style={{ textAlign: 'center' }}>Storylet Admin by ISISLab</Footer>
                  </Layout>

              </Layout>
          </Router>
      </>
  )
}

export default App;
