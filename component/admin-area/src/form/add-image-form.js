import React, {useState} from "react";
import Form from "antd/es/form";
import {Input, Button, Upload, Icon} from "antd";

function AddImage ({form, handle_submit}) {

    const [file, setFile] = useState(null);
    const { getFieldDecorator } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if(!err)
                handle_submit({...values, file});
        });
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
        <Form
            layout="vertical"
            className="zform ant-advanced-search-form"
            onSubmit={handleSubmit}>

            <Form.Item label={'Nome'}>
                {getFieldDecorator('name', {
                    rules: [
                        {
                            required: true,
                            message: 'Campo obbligatorio',
                        },
                    ],
                })(<Input placeholder="placeholder" />)}
            </Form.Item>

            <Form.Item label={'Description'}>
                {getFieldDecorator('description', {
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
                Submit
            </Button>
        </Form>
    );

}

export default Form.create({name:'AddImage'})(AddImage);
