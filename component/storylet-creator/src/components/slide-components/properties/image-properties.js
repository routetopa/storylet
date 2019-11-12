import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../../../style/slide-components/properties/image-properties.css';
import '../../../vendor/bootstrap.min.css';

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
                    <label className="col-md-4 col-sm-4 _left">Position</label>
                    <label htmlFor="top" className="col-md-2 col-sm-2">x:</label>
                    <Field name="top" type="number" className={'form-control col-md-2 col-sm-2' + (errors.top && touched.top ? ' is-invalid' : '')} />
                    <label htmlFor="left" className="col-md-2 col-sm-2">y:</label>
                    <Field name="left" type="number" className={'form-control col-md-2 col-sm-2' + (errors.left && touched.left ? ' is-invalid' : '')} />
                    <ErrorMessage name="scale" component="div" className="invalid-feedback" />
                </div>

                <div className="form-group">
                    <label htmlFor="width">Width</label>
                    <Field name="width" type="number" className={'form-control' + (errors.width && touched.width ? ' is-invalid' : '')} />
                    <ErrorMessage name="width" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height</label>
                    <Field name="height" type="number" className={'form-control' + (errors.height && touched.height ? ' is-invalid' : '')} />
                    <ErrorMessage name="height" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group form-inline">
                    <label className="col-md-4 col-sm-4 _left">Scale</label>
                    <label htmlFor="scaleX" className="col-md-2 col-sm-2">x:</label>
                    <Field name="scaleX" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                    <label htmlFor="scaleY" className="col-md-2 col-sm-2">y:</label>
                    <Field name="scaleY" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                    <ErrorMessage name="scale" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="keepRatio">Keep Ratio</label>
                    <Field name="keepRatio" type="boolean" className={'form-control' + (errors.keepRatio && touched.keepRatio ? ' is-invalid' : '')} />
                    <ErrorMessage name="keepRatio" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="rotate">Rotate</label>
                    <Field name="rotate" type="?" className={'form-control' + (errors.rotate && touched.rotate ? ' is-invalid' : '')} />
                    <ErrorMessage name="rotate" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="zIndex">Z-Index</label>
                    <Field name="zIndex" type="?" className={'form-control' + (errors.zIndex && touched.zIndex ? ' is-invalid' : '')} />
                    <ErrorMessage name="zIndex" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mr-2">Register</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
            </Form>
        )}
    </Formik>
);

export default ImageProperties;