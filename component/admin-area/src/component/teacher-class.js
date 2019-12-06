import React, {useState} from 'react';
import { Icon, Tabs, Table, Modal, Input } from 'antd';

import '../css/teacher-class.css'

export default function TeacherClass()
{
    const [selectedClass, setSelectedClass] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalAddClass, setModalAddClass] = useState(false);

    const select_class = () => {
        setSelectedClass(true);
    };

    const toggle_modal_visible = () => {
        setModalVisible(!modalVisible);
    };

    const add_class = () => {
        setModalAddClass(!modalAddClass)
    };

    const classes = [
        {name:'I C', description: 'Elementare'},
        {name:'I A', description: 'Elementare'},
        {name:'I B', description: 'Elementare'},
    ];

    const student = [
        {key: '1', username: 'IAuser01', password: 'password01', action:'Delete | Edit'},
        {key: '2', username: 'IAuser02', password: 'password02', action:'Delete | Edit'},
        {key: '3', username: 'IAuser03', password: 'password03', action:'Delete | Edit'},
        {key: '4', username: 'IAuser04', password: 'password04', action:'Delete | Edit'},
        {key: '5', username: 'IAuser05', password: 'password05', action:'Delete | Edit'},
        {key: '6', username: 'IAuser06', password: 'password06', action:'Delete | Edit'},
        {key: '7', username: 'IAuser07', password: 'password07', action:'Delete | Edit'},
        {key: '8', username: 'IAuser08', password: 'password08', action:'Delete | Edit'},
        {key: '9', username: 'IAuser09', password: 'password09', action:'Delete | Edit'}
    ];

    const student_columns = [
        {title: 'Username', dataIndex: 'username', key: 'username'},
        {title: 'Password', dataIndex: 'password', key: 'password'},
        {title: 'Action',   dataIndex: 'action',   key: 'action'}
    ];

    const selected_student = {'name': 'Raffaele', 'surname': 'Petta', 'completed_stories':10};

    const stories = [
        {key: '1', title: 'Lucilla e Gastone volano insieme', description: 'La storia di lucilla e gastone', username:'IAuser01'},
        {key: '2', title: 'Gastone il calabrone', description: 'Il calabrone', username:'IAuser01'},
        {key: '3', title: 'Platanina la fogliolina', description: 'La fogliolina', username:'IAuser02'},
        {key: '4', title: 'Un\'ape molto speciale', description: 'L\'ape', username:'IAuser02'},
        {key: '5', title: 'Camilla la formica', description: 'La formica', username:'IAuser03'},
        {key: '6', title: 'Enrico il lombrico', description: 'Il lombrico', username:'IAuser04'},
        {key: '7', title: 'La quercia saggia sorride felice', description: 'La quercia', username:'IAuser05'},
    ];

    const stories_columns = [
        {title: 'Titolo', dataIndex: 'title', key: 'title'},
        {title: 'Descrizione', dataIndex: 'description', key: 'description'},
        {title: 'Username', dataIndex: 'username', key: 'username'}
    ];

    const ideas = [
        {key: '1', title: 'Una slide iniziale', description: 'Obiettivo 7'},
        {key: '2', title: 'Una slide iniziale e una finale', description: 'Obiettivo 4'},
        {key: '3', title: 'Una slide al centro', description: 'Obiettivo 4'},
        {key: '4', title: 'Tema libero', description: 'Obiettivo 1'},
    ];

    const ideas_columns = [
        {title: 'Titolo', dataIndex: 'title', key: 'title'},
        {title: 'Descrizione', dataIndex: 'description', key: 'description'},
    ];

    return (
        <>
            <h1>Le tue classi</h1>

            <div className='class-container'>
                {classes.map((c, idx) => {
                    return (
                        <div onClick={select_class} key={`class_${idx}`} className='class'>{c.name} - {c.description}</div>
                    );
                })}
            </div>

            {selectedClass ? (
                <div className='class-detail'>
                    <Tabs tabPosition='top' animated={false}>

                        <Tabs.TabPane tab={<span><Icon type="team" />Studenti</span>} key="1">
                            <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                                   dataSource={student}
                                   columns={student_columns}
                                   onRow={(r) => ({
                                       onClick: () => toggle_modal_visible()
                                   })}
                            />
                        </Tabs.TabPane>

                        <Tabs.TabPane tab={<span><Icon type="highlight" />Storie</span>} key="2">
                            <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                                   dataSource={stories}
                                   columns={stories_columns}
                            />
                        </Tabs.TabPane>

                        <Tabs.TabPane tab={<span><Icon type="bulb" />Idee</span>} key="3">
                            <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                                   dataSource={ideas}
                                   columns={ideas_columns}
                            />
                        </Tabs.TabPane>

                    </Tabs>
                </div> ) : null}

            <Icon theme="filled"
                  style={{fontSize:'64px', position:'absolute', bottom:'64px', right:'64px', cursor: 'pointer'}}
                  type="plus-circle"
                  onClick={add_class}
            />

            <Modal
                title="Aggiungi classe"
                visible={modalAddClass}
                onOk={add_class}
                onCancel={add_class}
            >
                <Input placeholder="Classe" style={{marginBottom:'16px'}} />
                <Input placeholder="Sezione" style={{marginBottom:'16px'}} />
                <Input placeholder="Numero studenti" style={{marginBottom:'16px'}} />
            </Modal>

            <Modal
                title="Info"
                visible={modalVisible}
                onOk={toggle_modal_visible}
                onCancel={toggle_modal_visible}
            >
                Nome : {selected_student.name} <br/>
                Cognome : {selected_student.surname} <br/>
                Numero di storie completate :  {selected_student.completed_stories}
            </Modal>
        </>
    )
}