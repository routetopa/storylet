import React, {useState, useEffect} from 'react';
import { Icon, Tabs, Table, Modal, Popconfirm, notification, Button, Tooltip, Divider, Empty, List, Card, Row, Col } from 'antd';
import {API_CALL} from '../api/api';

import AddClassForm from '../form/add-class-form';
import EditStudentForm from '../form/edit-student-form';
import AddImageForm from '../form/add-image-form'
import ClassSettings from "../form/class-settings";

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
        {title: 'Azioni',   key: 'action',
            render: (text, record, index) =>
            {
                return (
                    <>
                        <Icon theme="filled"
                              style={{fontSize:'24px', cursor:'pointer', marginRight:'24px'}}
                              type="play-circle"
                              onClick={() => window.open(`${window.API_ENDPOINT.STORYLET_VIEWER}/${record.id}`,'_blank')}
                        />
                        <Tooltip placement="top" title={record.status === null || parseInt(record.status) === 0 ? 'Rendi pubblica' : 'Rendi privata'}>
                        <Icon theme="filled"
                              style={{fontSize:'24px', cursor:'pointer', marginRight:'24px'}}
                              type={record.status === null || parseInt(record.status) === 0 ? 'eye' : 'eye-invisible'}
                              onClick={() => togglePublishStorylet(record)}
                        />
                        </Tooltip>
                        <Popconfirm title="Sure to ?" onConfirm={() => deleteStorylet(record)}>
                            <Icon theme="filled"
                                  style={{fontSize:'24px', cursor:'pointer'}}
                                  type="delete"
                            />
                        </Popconfirm>
                    </>
                )
            }
        }
    ];

    const [selectedClass, setSelectedClass] = useState(null);
    const [classes, setClasses] = useState(null);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const [addClassModalVisible, setAddClassModalVisible] = useState(false);
    const [studentDetailModalVisible, setStudentDetailModalVisible] = useState(false);
    const [addImageModalVisible, setAddImageModalVisible] = useState(false);

    const reload_data = async () =>
    {
        let data = await fetch_data();
        let selected_calss = Object.assign({}, data[selectedClass.idx]);
        selected_calss.idx = selectedClass.idx;
        setSelectedClass(selected_calss);
    };

    const togglePublishStorylet = async (data) =>
    {
        console.log(data);
        let response = await API_CALL.put(`${window.API_ENDPOINT.CRUD_STORYLET}/${data.id}`, {status : (parseInt(data.status) === 1 ? 0 : 1)})

        if(response.data.status === 'OK')
        {
            reload_data();
        }
    };

    const deleteStorylet = async (data) =>
    {
        console.log(data);
        let response = await API_CALL.delete(`${window.API_ENDPOINT.CRUD_STORYLET}/${data.id}`);

        if(response.data.status === 'OK')
        {
            fetch_data();
        }
    };

    const select_class = (idx) =>
    {
        classes[idx].idx = idx;
        setSelectedClass(Object.assign({}, classes[idx]));
    };

    const showStudentDetail = (data) =>
    {
        console.log('show student detail');
        console.log(data);
        setSelectedStudent(Object.assign({}, data));
        setStudentDetailModalVisible(true);
    };

    const deleteStudent = async (data) =>
    {
        console.log(data);
        let response = await API_CALL.delete(`${window.API_ENDPOINT.CRUD_STUDENT}/${data.id}`);

        if(response.data.status === 'OK')
        {
            reload_data();
        }
    };

    const add_class_form_submit = async (data) =>
    {
        console.log(data);
        let response = await API_CALL.post(window.API_ENDPOINT.CRUD_CLASS,
            {
                    class       : data.class,
                    section     : data.section,
                    description : data.description,
                    size        : data.student_number
                }
            );

        if(response.data.status === 'OK')
        {
            setAddClassModalVisible(false);
            fetch_data();
        }
    };

    const add_image_form_submit = async (data) =>
    {
        const formData = new FormData();
        data.file.forEach((file) => {
            formData.append('files[]', file);
        });
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('classId', selectedClass.id);

        let response = await API_CALL.post(window.API_ENDPOINT.ADD_IMAGE, formData);

        if(response.data.status === 'OK')
        {
            setAddImageModalVisible(false);
            reload_data();
        }

    };

    const edit_user_submit = async (data) =>
    {
        console.log(data);
        let response = await API_CALL.put(`${window.API_ENDPOINT.CRUD_STUDENT}/${selectedStudent.id}`,
            {
                    username : data.username,
                    password : data.password,
                    name     : data.name,
                    surname  : data.surname,
                }
            );

        if(response.data.status === 'OK')
        {
            reload_data();
        } else {
            notification.open({
                message: 'Errore',
                description: response.data.error
            });
        }

        setStudentDetailModalVisible(false);
        setSelectedStudent(null);
    };

    const class_setting_submit = async (values, file) =>
    {
        const formData = new FormData();
        file && file.forEach((f) => {
            formData.append('files[]', f);
        });
        formData.append('class', values.class);
        formData.append('section', values.section);
        formData.append('description', values.description);
        formData.append('classId', selectedClass.id);

        let response = await API_CALL.post(window.API_ENDPOINT.UPDATE_CLASS, formData);
        if(response.data.status === 'OK')
        {
            reload_data();
        }
    };

    useEffect(() =>
    {
        fetch_data();
    }, []);

    const fetch_data = async () =>
    {
        let response = await API_CALL.get(window.API_ENDPOINT.GET_CLASS);

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
            <Divider orientation={"left"}>Le tue classi</Divider>

            <div className='class-container'>
                {classes && classes.map((c, idx) => {
                    return (
                        <div onClick={(e) => select_class(idx)} key={`class_${idx}`} className='class'>
                            <div style={{width:'100%', textAlign:'center', background: `url(${c.imagePath})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'100%'}}>
                                {!c.imagePath &&
                                    (<div>
                                        <Icon theme="filled"
                                              style={{fontSize: '64px', cursor: 'pointer'}}
                                              type="bank"
                                        />
                                    </div>)
                                }

                                <div style={{position:'absolute', bottom:'10px', width:'calc(100% - 16px)'}}>
                                    <div>{c.class} {c.section}</div>
                                    <div>{c.description}</div>
                                </div>

                            </div>
                        </div>
                    );
                })}
                <div className='add-class-container'>
                    <Button onClick={() => setAddClassModalVisible(true)} type="primary" className='add-button'>
                        <Icon type='plus' /> Aggiungi classe
                    </Button>
                </div>
            </div>

            <Divider>Info {selectedClass ? `${selectedClass.class} - ${selectedClass.section}` : ''}</Divider>

            {selectedClass ? (
                <div className='class-detail'>
                    <Tabs tabPosition='top' animated={false}>

                        <Tabs.TabPane tab={<span><Icon type="team" />Studenti</span>} key="1">
                            <Table dataSource={selectedClass.students}
                                   rowKey='id'
                                   columns={student_columns}
                            />
                        </Tabs.TabPane>

                        <Tabs.TabPane tab={<span><Icon type="highlight" />Storie</span>} key="2">

                            <Button type="primary" onClick={reload_story} loading={false} style={{marginBottom:'16px'}}>
                                <Icon type='reload' /> Aggiorna
                            </Button>

                            <Table dataSource={selectedClass.stories}
                                   rowKey='id'
                                   columns={stories_columns}
                            />
                        </Tabs.TabPane>

                        <Tabs.TabPane tab={<span><Icon type="file-image" />Immagini</span>} key="3">
                            <Button onClick={()=>setAddImageModalVisible(true)} type="primary" style={{marginBottom: 16}}>
                                <Icon type='plus' /> Aggiungi immagine
                            </Button>
                            <List
                                grid={{ gutter: 8, column: 5 }}
                                dataSource={selectedClass.images}
                                renderItem={item => (
                                    <List.Item>
                                        <Card title={item.name} bodyStyle={{height:'200px'}}>
                                            <img src={item.path} style={{height:'calc(100% - 20px)', width:'100%', objectFit:'contain'}} />
                                            {item.description}
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </Tabs.TabPane>

                        <Tabs.TabPane tab={<span><Icon type="setting" />Preferenze</span>} key="4">
                            <ClassSettings classData={selectedClass} onClassSettingSubmit={class_setting_submit} />
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
                </div> ) : <Empty description={false} >Seleziona una classe per accedere alle relative informazioni</Empty> }

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

            <Modal
                title="Aggiungi immagine"
                visible={addImageModalVisible}
                onCancel={() => setAddImageModalVisible(false)}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <AddImageForm handle_submit={add_image_form_submit} />
            </Modal>
        </>
    )
}