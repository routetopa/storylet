import React, {useState} from "react";
import {Button, Icon, Input, Popconfirm, Upload, Row, Col} from "antd";
import {API_CALL} from "../api/api";
import Form from "antd/es/form";

function ClassSettings({classData, form})
{
    const [file, setFile] = useState(null);
    const { getFieldDecorator } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if(!err)
                console.log(values);
                //handle_submit({...values, file});
        });
    };

    const delete_class = async (class_id) =>
    {
        console.log(class_id);
        let response = await API_CALL.delete(`${window.API_ENDPOINT.CRUD_CLASS}/${class_id}`);

        if(response.data.status === 'OK')
        {
            console.log('deleted');
        }
    };

    const normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const dummy_request = function({file, onSuccess})
    {
        setTimeout(()=>{
            onSuccess("ok")
        },0);
    };

    const handle_upload = function (file, fileList) {
        setFile(fileList)
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col>
                    <Form
                        layout="vertical"
                        className="zform ant-advanced-search-form"
                        onSubmit={handleSubmit}>

                        <Form.Item label={'Classe'}>
                            {getFieldDecorator('class', {
                                initialValue : classData.class,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Campo obbligatorio',
                                    },
                                ],
                            })(<Input placeholder="placeholder" />)}
                        </Form.Item>

                        <Form.Item label={'Sezione'}>
                            {getFieldDecorator('section', {
                                initialValue : classData.section,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Campo obbligatorio',
                                    },
                                ],
                            })(<Input placeholder="placeholder" />)}
                        </Form.Item>

                        <Form.Item label={'Descrizione'}>
                            {getFieldDecorator('description', {
                                initialValue : classData.description,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Campo obbligatorio',
                                    },
                                ],
                            })(<Input placeholder="placeholder" />)}
                        </Form.Item>

                        <Form.Item label={'Immagine'} >
                            {getFieldDecorator('image', {
                                initialValue: [],
                                valuePropName: 'fileList',
                                getValueFromEvent: normFile,
                                rules: [
                                    {
                                        required: true,
                                        message: 'Campo obbligatorio',
                                    },
                                ],
                            })(<Upload customRequest={dummy_request} beforeUpload={handle_upload} listType="picture" name='image'>
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                </Button>
                            </Upload>)}
                        </Form.Item>

                        <Button type="primary" htmlType="submit">
                            <Icon type="edit" /> Modifica
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>
                    <Popconfirm title="Vuoi cancellare la classe ?" onConfirm={(e) => delete_class(classData.id)}>
                        <Button type="danger">
                            <Icon type='delete' /> Elimina la classe
                        </Button>
                    </Popconfirm>
                </Col>
            </Row>

        </>

    )

}

export default Form.create({name:'ClassSettings'})(ClassSettings);