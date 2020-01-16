import Form from "antd/es/form";
import {Input, Button} from "antd";
import React from "react";

function EditStudent ({form, handle_submit, data})
{
    const { getFieldDecorator } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if(!err)
                handle_submit(values);
        });
    };

    return (
        <Form
            layout="vertical"
            className="zform ant-advanced-search-form"
            onSubmit={handleSubmit}>

            <Form.Item label={'Username'}>
                {getFieldDecorator('username', {
                    initialValue : data.username,
                    rules: [
                        {
                            required: true,
                            message: 'Campo obbligatorio',
                        },
                    ],
                })(<Input placeholder="placeholder" />)}
            </Form.Item>

            <Form.Item label={'Password'}>
                {getFieldDecorator('password', {
                    initialValue : data.password,
                    rules: [
                        {
                            required: true,
                            message: 'Campo obbligatorio',
                        },
                    ],
                })(<Input placeholder="placeholder" />)}
            </Form.Item>

            <Form.Item label={'Nome'}>
                {getFieldDecorator('name', {
                    initialValue : data.name,
                    rules: [
                        {
                            required: true,
                            message: 'Campo obbligatorio',
                        },
                    ],
                })(<Input placeholder="placeholder" />)}
            </Form.Item>

            <Form.Item label={'Cognome'}>
                {getFieldDecorator('surname', {
                    initialValue : data.surname,
                    rules: [
                        {
                            required: true,
                            message: 'Campo obbligatorio',
                        },
                    ],
                })(<Input placeholder="placeholder" />)}
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );

}

export default Form.create({name:'EditStudent'})(EditStudent);
