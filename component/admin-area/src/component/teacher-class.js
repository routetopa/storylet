import React, {useState, useEffect} from 'react';
import { Icon, Tabs, Table, Modal, Popconfirm, notification, Button } from 'antd';
import axios from 'axios';

import AddClassForm from '../form/add-class-form';
import EditStudentForm from '../form/edit-student-form';

import '../css/teacher-class.css'

export default function TeacherClass()
{
    const student_columns = [
        {title: 'Username', dataIndex: 'username', key: 'username'},
        {title: 'Password', dataIndex: 'password', key: 'password'},
        {title: 'Nome',     dataIndex: 'name',     key: 'name'},
        {title: 'Cognome',  dataIndex: 'surname',  key: 'surname'},
        {title: 'Azioni',   key: 'action',
            render: (text, record, index) =>
            {
                return (
                    <div>
                        <Icon theme="filled"
                              style={{fontSize:'24px', cursor:'pointer', marginRight:'24px'}}
                              type="edit"
                              onClick={() => showStudentDetail(record)}
                        />
                        <Popconfirm title="Sure to ?" onConfirm={() => deleteStudent(record)}>
                            <Icon theme="filled"
                                  style={{fontSize:'24px', cursor:'pointer'}}
                                  type="delete"
                            />
                        </Popconfirm>
                    </div>
                )
            }
        }
    ];

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
            }},
        {title: 'Username', key: 'ownerId',
            render: (text, record, index) =>
            {
                let res = selectedClass.students.find(
                    (e) => (e.userId === record.ownerId)
                );
                return `${res.name} ${res.surname} (${res.username})`;
            }
        },
        {title: 'Action',   key: 'action',
            render: (text, record, index) =>
            {
                return (
                    <div>
                        <Icon theme="filled"
                              style={{fontSize:'24px', cursor:'pointer', marginRight:'24px'}}
                              type="play-circle"
                              onClick={() => window.open(`${window.API_ENDPOINT.STORYLET_VIEWER}/${record.id}`,'_blank')}
                        />
                        <a onClick={() => togglePublishStorylet(record)}> {parseInt(record.status) === 1 ? 'Rendi pubblica' : 'Rendi privata'}</a> |
                        <Popconfirm title="Sure to ?" onConfirm={() => deleteStorylet(record)}>
                            <Icon theme="filled"
                                  style={{fontSize:'24px', cursor:'pointer'}}
                                  type="delete"
                            />
                        </Popconfirm>
                    </div>
                )
            }
        }
    ];

    const [selectedClass, setSelectedClass] = useState(null);
    const [classes, setClasses] = useState(null);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const [addClassModalVisible, setAddClassModalVisible] = useState(false);
    const [studentDetailModalVisible, setStudentDetailModalVisible] = useState(false);

    const togglePublishStorylet = async (data) =>
    {
        console.log(data);
        let response = await axios.put(`${window.API_ENDPOINT.CRUD_STORYLET}/${data.id}`,
            {
                status : (parseInt(data.status) === 1 ? 0 : 1)
            },
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        if(response.data.status === 'OK')
        {
            let data = await fetch_data();
            let selected_calss = Object.assign({}, data[selectedClass.idx]);
            selected_calss.idx = selectedClass.idx;
            setSelectedClass(selected_calss);
        }
    };

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

    const select_class = (idx) => {
        classes[idx].idx = idx;
        setSelectedClass(Object.assign({}, classes[idx]));
    };

    const showStudentDetail = (data) => {
        console.log('show student detail');
        console.log(data);
        setSelectedStudent(Object.assign({}, data));
        setStudentDetailModalVisible(true);
    };

    const deleteStudent = async (data) => {
        console.log(data);
        let response = await axios.delete(`${window.API_ENDPOINT.CRUD_STUDENT}/${data.id}`,
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        if(response.data.status === 'OK')
        {
            fetch_data();
        }
    };

    const add_class_form_submit = async (data) => {
        console.log(data);
        let response = await axios.post(window.API_ENDPOINT.CRUD_CLASS,
            {
                class       : data.class,
                section     : data.section,
                description : data.description,
                size        : data.student_number,
            },
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        if(response.data.status === 'OK')
        {
            setAddClassModalVisible(false);
            fetch_data();
        }
    };

    const edit_user_submit = async (data) => {
        console.log(data);
        let response = await axios.put(`${window.API_ENDPOINT.CRUD_STUDENT}/${selectedStudent.id}`,
            {
                username : data.username,
                password : data.password,
                name     : data.name,
                surname  : data.surname,
            },
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        if(response.data.status === 'OK')
        {

            let data = await fetch_data();
            let selected_calss = Object.assign({}, data[selectedClass.idx]);
            selected_calss.idx = selectedClass.idx;
            setSelectedClass(selected_calss);
        } else {
            notification.open({
                message: 'Errore',
                description: response.data.error
            });
        }

        setStudentDetailModalVisible(false);
        setSelectedStudent(null);
    };

    const delete_class = async (class_id) => {
        console.log(class_id);
        let response = await axios.delete(`${window.API_ENDPOINT.CRUD_CLASS}/${class_id}`,
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        if(response.data.status === 'OK')
        {
            console.log('deleted');
        }
    };

    useEffect(() =>
    {
        fetch_data();
    }, []);

    const fetch_data = async () => {
        let response = await axios.get(window.API_ENDPOINT.GET_CLASS,
            { headers: { 'X-WP-Nonce': window.API_NONCE.NONCE } });
        setClasses(response.data.data);
        return response.data.data;
    };

    const reload_story = async () => {
        let cl = await fetch_data();
        cl[selectedClass.idx].idx = selectedClass.idx;
        setSelectedClass(Object.assign({}, cl[selectedClass.idx]));
    };

    /*const ideas = [
        {key: '1', title: 'Una slide iniziale', description: 'Obiettivo 7'},
        {key: '2', title: 'Una slide iniziale e una finale', description: 'Obiettivo 4'},
        {key: '3', title: 'Una slide al centro', description: 'Obiettivo 4'},
        {key: '4', title: 'Tema libero', description: 'Obiettivo 1'},
    ];

    const ideas_columns = [
        {title: 'Titolo', dataIndex: 'title', key: 'title'},
        {title: 'Descrizione', dataIndex: 'description', key: 'description'},
    ];*/

    return (
        <>
            <h1>Le tue classi</h1>

            <div className='class-container'>
                {classes && classes.map((c, idx) => {
                    return (
                        <div onClick={(e) => select_class(idx)} key={`class_${idx}`} className='class'>
                            {c.class} {c.section} - {c.description}

                            <Popconfirm title="Sure to ?" onConfirm={(e) => delete_class(c.id)}>
                                <Icon theme="filled"
                                      style={{fontSize:'24px', cursor:'pointer'}}
                                      type="delete"
                                />
                            </Popconfirm>

                        </div>
                    );
                })}
            </div>

            {selectedClass ? (
                <div className='class-detail'>
                    <Tabs tabPosition='top' animated={false}>

                        <Tabs.TabPane tab={<span><Icon type="team" />Studenti</span>} key="1">
                            <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                                   dataSource={selectedClass.students}
                                   rowKey='id'
                                   columns={student_columns}
                            />
                        </Tabs.TabPane>

                        <Tabs.TabPane tab={<span><Icon type="highlight" />Storie</span>} key="2">
                            <Table style={{backgroundColor:'#ffffff', padding: '16px'}}
                                   dataSource={selectedClass.stories}
                                   rowKey='id'
                                   columns={stories_columns}
                            />

                            <Button type="primary" onClick={reload_story} loading={false}>
                                Reload
                            </Button>

                        </Tabs.TabPane>

                        {/*
                            <Tabs.TabPane tab={<span><Icon type="bulb"/>Idee</span>} key="3">
                                <Table style={{backgroundColor: '#ffffff', padding: '16px'}}
                                       dataSource={ideas}
                                       columns={ideas_columns}
                                />
                            </Tabs.TabPane>
                        */}


                    </Tabs>
                </div> ) : null }

            <Icon theme="filled"
                  style={{fontSize:'64px', position:'absolute', bottom:'20px', right:'64px', cursor: 'pointer'}}
                  type="plus-circle"
                  onClick={() => setAddClassModalVisible(true)}
            />

            <Modal
                title="Aggiungi classe"
                visible={addClassModalVisible}
                onCancel={() => setAddClassModalVisible(false)}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <AddClassForm handle_submit={add_class_form_submit} />
            </Modal>

            <Modal
                title="Info Studente"
                visible={studentDetailModalVisible}
                onCancel={() => setStudentDetailModalVisible(false)}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                {selectedStudent ? (<EditStudentForm handle_submit={edit_user_submit} data={selectedStudent} />) : null}
            </Modal>
        </>
    )
}