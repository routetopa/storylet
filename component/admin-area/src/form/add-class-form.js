import Form from "antd/es/form";
import {Input, Button, InputNumber} from "antd";
import React from "react";

function AddClass ({form, handle_submit}) {

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

            <Form.Item label={'Classe'}>
                {getFieldDecorator('class', {
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
                    rules: [
                        {
                            required: true,
                            message: 'Campo obbligatorio',
                        },
                    ],
                })(<Input placeholder="placeholder" />)}
            </Form.Item>

            <Form.Item label={'Numero di studenti'}>
                {getFieldDecorator('student_number', {
                    rules: [
                        {
                            required: true,
                            message: 'Campo obbligatorio',
                        },
                    ],
                })(<InputNumber placeholder="1" min={1} />)}
            </Form.Item>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );

}

export default Form.create({name:'AddClass'})(AddClass);
