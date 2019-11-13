import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../../../style/slide-components/properties/image-properties.css';
import '../../../vendor/bootstrap.min.css';

// FORMIK + YUP --> https://jasonwatmore.com/post/2019/04/10/react-formik-form-validation-example

const ImageProperties = () => (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }}

        validationSchema={Yup.object().shape({
            firstName: Yup.string()
                .required('First Name is required'),
            lastName: Yup.string()
                .required('Last Name is required'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword:  Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
        })}
        // onSubmit={(values, { setSubmitting }) => {
        //     setTimeout(() => {
        //         alert(JSON.stringify(values, null, 2));
        //         setSubmitting(false);
        //     }, 4000);
        // }}

        onSubmit={fields => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
    >
        {({ errors, status, touched }) => (
            <Form>
                <div className="form-group form-inline">
                    <label className="col-md-4 col-sm-4 _left">Size</label>
                    <label htmlFor="width" className="col-md-2 col-sm-2">Width:</label>
                    <Field name="width" type="number" className={'form-control col-md-2 col-sm-2' + (errors.width && touched.width ? ' is-invalid' : '')} />
                    <label htmlFor="height" className="col-md-2 col-sm-2">Height:</label>
                    <Field name="height" type="number" className={'form-control col-md-2 col-sm-2' + (errors.height && touched.height ? ' is-invalid' : '')} />
                    <ErrorMessage name="height" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group form-inline">
                    <label className="col-md-3 col-sm-3 _left">Position</label>
                    <label htmlFor="top" className="col-md-1 col-sm-1">X:</label>
                    <Field name="top" type="number" className={'form-control col-md-2 col-sm-2' + (errors.top && touched.top ? ' is-invalid' : '')} />
                    <label htmlFor="left" className="col-md-1 col-sm-1">Y:</label>
                    <Field name="left" type="number" className={'form-control col-md-2 col-sm-2' + (errors.left && touched.left ? ' is-invalid' : '')} />
                    <label htmlFor="zIndex" className="col-md-1 col-sm-1">Z:</label>
                    <Field name="zIndex" type="number" className={'form-control col-md-2 col-sm-2' + (errors.zIndex && touched.zIndex ? ' is-invalid' : '')} />
                    <ErrorMessage name="scale" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group form-inline">
                    <label className="col-md-3 col-sm-3 _left">Scale</label>
                    <label htmlFor="scaleX" className="col-md-1 col-sm-1">X:</label>
                    <Field name="scaleX" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                    <label htmlFor="scaleY" className="col-md-1 col-sm-1">Y:</label>
                    <Field name="scaleY" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                    <ErrorMessage name="scale" component="div" className="invalid-feedback" />
                    <div className="custom-control custom-checkbox col-md-3 col-sm-3">
                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                        <label className="custom-control-label" htmlFor="defaultUnchecked">lock</label>
                    </div>
                </div>

                <div className="form-group form-inline">
                    <label className="col-md-4 col-sm-4 _left">Rotate</label>
                    <label htmlFor="rotate" className="col-md-2 col-sm-2">Deg.:</label>
                    <Field name="rotate" type="number" className={'form-control col-md-2 col-sm-2' + (errors.rotate && touched.rotate ? ' is-invalid' : '')} />
                    <ErrorMessage name="rotate" component="div" className="invalid-feedback" />
                </div>

                {/*<div className="form-group">*/}
                {/*    <button type="submit" className="btn btn-primary mr-2">Save</button>*/}
                {/*    <button type="reset" className="btn btn-secondary">Reset</button>*/}
                {/*</div>*/}
            </Form>
        )}
    </Formik>
);

export default ImageProperties;