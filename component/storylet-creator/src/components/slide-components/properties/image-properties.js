import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import {Formik, Field, Form, ErrorMessage, useFormikContext} from 'formik';
import * as Yup from 'yup';
import debounce from 'just-debounce-it';

import '../../../vendor/bootstrap.min.css';
import '../../../style/slide-components/properties/image-properties.css';

import setSlideData from "../../../reducer/actions/set-slides-data";

const AutoSave = ({debounceMs})=>{
    const formik = useFormikContext();
    const debouncedSubmit = React.useCallback (
        debounce(() => formik.submitForm(), debounceMs),
        [debounceMs, formik.submitForm]
    );

    React.useEffect(()=>{
        debouncedSubmit();
    }, [debouncedSubmit, formik.values]);

    return (<></>);
};

export default function ImageProperties() {
    const dispatch = useDispatch();

    const slidesData = useSelector(state => state.slidesData);
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    // Form Parameters
    const [initialValues, setInitialValues] = useState({
        width: '0',
        height: '0',
        top: '0',
        left: '0',
        zIndex: '0',
        scaleX: '0',
        scaleY: '0',
        keepRatio: true,
        rotate: '0'
    });

    useEffect(()=>{
        // console.log("properties slidesData");
        // if(!slidesData || !selectedSlide || !selectedComponent)
        //     return;
        //
        // debugger
        // let component = slidesData[selectedSlide.index].components[selectedComponent.index];
        //
        // setInitialValues({
        //     width: Math.round(component.w * 10) / 10,
        //     height: Math.round(component.h * 10) / 10,
        //     top: Math.round(component.x * 10) / 10,
        //     left: Math.round(component.y * 10) / 10,
        //     zIndex: component.zIndex,
        //     scaleX: Math.round(component.scale[0] * 10) / 10,
        //     scaleY: Math.round(component.scale[1] * 10) / 10,
        //     keepRatio: component.keepRatio,
        //     rotate: Math.round(component.rotate * 10) / 10
        // });
    }, [slidesData]);

    useEffect(()=>{
        if(!selectedComponent || selectedComponent.type !== 'image')
            return;

        setInitialValues({
            width: Math.round(selectedComponent.w * 10) / 10,
            height: Math.round(selectedComponent.h * 10) / 10,
            top: Math.round(selectedComponent.x * 10) / 10,
            left: Math.round(selectedComponent.y * 10) / 10,
            zIndex: selectedComponent.zIndex,
            scaleX: Math.round(selectedComponent.scale[0] * 10) / 10,
            scaleY: Math.round(selectedComponent.scale[1] * 10) / 10,
            keepRatio: selectedComponent.keepRatio,
            rotate: Math.round(selectedComponent.rotate * 10) / 10
        });
    }, [selectedComponent]);

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}

            validationSchema={Yup.object().shape({
                width: Yup.number()
                    .min(0, 'Width must be at least 1% of slide width')
                    .max(100, 'Width must be at most 100% of slide width'),
                height: Yup.number()
                    .min(0, 'Width must be at least 1% of slide width')
                    .max(100, 'Width must be at most 100% of slide width')
            })}

            onSubmit={fields => {
                return
                let slideIdx = selectedSlide.index;
                let componentIdx = selectedComponent.index;

                let data = cloneDeep(slidesData);
                data[slideIdx].components[componentIdx].w = fields.width;
                data[slideIdx].components[componentIdx].h = fields.height;
                data[slideIdx].components[componentIdx].x = fields.top;
                data[slideIdx].components[componentIdx].y = fields.left;
                data[slideIdx].components[componentIdx].zIndex = fields.zIndex;
                data[slideIdx].components[componentIdx].scale = [fields.scaleX,fields.scaleY];
                data[slideIdx].components[componentIdx].keepRatio = fields.keepRatio;
                data[slideIdx].components[componentIdx].rotate = fields.rotate;
                dispatch(setSlideData(data));
            }}
        >
            {({ errors, status, touched }) => (
                <Form>
                    <AutoSave debounceMs={300} />

                    <div className="form-group form-inline">
                        <label className="col-md-4 col-sm-4 _left">Size</label>
                        <label htmlFor="width" className="col-md-2 col-sm-2">Width:</label>
                        <Field name="width" type="number" className={'form-control col-md-2 col-sm-2' + (errors.width && touched.width ? ' is-invalid' : '')} />
                        <label htmlFor="height" className="col-md-2 col-sm-2">Height:</label>
                        <Field name="height" type="number" className={'form-control col-md-2 col-sm-2' + (errors.height && touched.height ? ' is-invalid' : '')} />
                        <ErrorMessage name="width" component="div" className="invalid-feedback col-md-12 col-sm-12" />
                        <ErrorMessage name="height" component="div" className="invalid-feedback col-md-12 col-sm-12" />
                    </div>

                    <div className="form-group form-inline">
                        <label className="col-md-3 col-sm-3 _left">Position</label>
                        <label htmlFor="top" className="col-md-1 col-sm-1">X:</label>
                        <Field name="top" type="number" className={'form-control col-md-2 col-sm-2' + (errors.top && touched.top ? ' is-invalid' : '')} />
                        <label htmlFor="left" className="col-md-1 col-sm-1">Y:</label>
                        <Field name="left" type="number" className={'form-control col-md-2 col-sm-2' + (errors.left && touched.left ? ' is-invalid' : '')} />
                        <label htmlFor="zIndex" className="col-md-1 col-sm-1">Z:</label>
                        <Field name="zIndex" type="number" className={'form-control col-md-2 col-sm-2' + (errors.zIndex && touched.zIndex ? ' is-invalid' : '')} />
                    </div>

                    <div className="form-group form-inline">
                        <label className="col-md-3 col-sm-3 _left">Scale</label>
                        <label htmlFor="scaleX" className="col-md-1 col-sm-1">X:</label>
                        <Field name="scaleX" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                        <label htmlFor="scaleY" className="col-md-1 col-sm-1">Y:</label>
                        <Field name="scaleY" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                        <div className="custom-control custom-checkbox col-md-3 col-sm-3">
                            <Field name="keepRatio" type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                            <label className="custom-control-label" htmlFor="defaultUnchecked">lock</label>
                            {/*<FontAwesomeIcon icon={faLock} className="icon" />*/}
                        </div>
                    </div>

                    <div className="form-group form-inline">
                        <label className="col-md-4 col-sm-4 _left">Rotate</label>
                        <label htmlFor="rotate" className="col-md-2 col-sm-2">Deg.:</label>
                        <Field name="rotate" type="number" className={'form-control col-md-2 col-sm-2' + (errors.rotate && touched.rotate ? ' is-invalid' : '')} />
                    </div>

                    <div className="form-group col-md-4 col-sm-4">
                        {/*<button type="submit" className="btn btn-primary mr-2">Save</button>*/}
                        <button type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </Form>
            )}
        </Formik>
)};

// FORMIK + YUP --> https://jasonwatmore.com/post/2019/04/10/react-formik-form-validation-example
// AUTOSAVE --> https://github.com/jaredpalmer/formik/blob/e51f09a318cba216a1ba3932da0906202df0b979/examples/DebouncedAutoSave.js#L18