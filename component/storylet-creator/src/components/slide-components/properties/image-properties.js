import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import {Formik, Field, Form, ErrorMessage, useFormikContext} from 'formik';
import * as Yup from 'yup';
import debounce from 'just-debounce-it';
import '../../../vendor/bootstrap.min.css';
import '../../../vendor/tooltip.css';
import '../../../style/slide-components/properties/image-properties.css';

import setSlideData from "../../../reducer/actions/set-slides-data";
import setSelectComponent from "../../../reducer/actions/select-component";
import copyComponent from "../../../reducer/actions/copy-component";
import setSelectSlide from "../../../reducer/actions/select-slide";
import {translate} from "../../helpers";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowsAltH, faArrowsAltV, faEye, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

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

export default function ImageProperties()
{
    const ln = useSelector(state => state.selectedLanguage);

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
        console.log('remove');
        document.removeEventListener('keydown', canc_remove_component);
        document.removeEventListener("keydown", copy_and_paste);
        if(!selectedComponent || selectedComponent.type !== 'image')
            return;
        console.log('add');
        document.addEventListener('keydown', canc_remove_component);
        document.addEventListener("keydown", copy_and_paste);
        return function cleanup() {
            console.log('cleanup');
            document.removeEventListener('keydown', canc_remove_component);
            document.removeEventListener("keydown", copy_and_paste);
        };
    }, [selectedComponent]);

    useEffect(()=>{
        // console.log("properties slidesData");
        if(!slidesData || !selectedSlide || !selectedComponent)
            return;

        let component = slidesData[selectedSlide.index].components[selectedComponent.index];

        setInitialValues({
            width: Math.round(component.w * 10) / 10,
            height: Math.round(component.h * 10) / 10,
            top: Math.round(component.x * 10) / 10,
            left: Math.round(component.y * 10) / 10,
            zIndex: component.zIndex,
            scaleX: Math.round(component.scale[0] * 10) / 10,
            scaleY: Math.round(component.scale[1] * 10) / 10,
            keepRatio: component.keepRatio,
            rotate: Math.round(component.rotate * 10) / 10
       });
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

    const flip = (direction) => {
        //todo change form value instead...
        let slideIdx = selectedSlide.index;
        let componentIdx = selectedComponent.index;

        let data = cloneDeep(slidesData);

        if(direction==='H')
            data[slideIdx].components[componentIdx].scale = [-data[slideIdx].components[componentIdx].scale[0], data[slideIdx].components[componentIdx].scale[1]];
        else // V
            data[slideIdx].components[componentIdx].scale = [data[slideIdx].components[componentIdx].scale[0], -data[slideIdx].components[componentIdx].scale[1]];

        dispatch(setSlideData(data));
        dispatch(setSelectSlide(data[slideIdx]));
        dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
    };

    const bringsUp = () => {
        //todo change form value instead...
        let slideIdx = selectedSlide.index;
        let componentIdx = selectedComponent.index;

        let data = cloneDeep(slidesData);

        let zIndex = 0;
        for(let i=0; i<data[slideIdx].components.length; i++)
            zIndex = Math.max(zIndex, data[slideIdx].components[i].zIndex);

        data[slideIdx].components[componentIdx].zIndex = zIndex+1;

        dispatch(setSlideData(data));
        dispatch(setSelectSlide(data[slideIdx]));
        dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
    };

    const keepRatio = () => {
        //todo change form value instead...
        let slideIdx = selectedSlide.index;
        let componentIdx = selectedComponent.index;

        let data = cloneDeep(slidesData);

        let keepRatio = !data[slideIdx].components[componentIdx].keepRatio;

        data[slideIdx].components[componentIdx].keepRatio = keepRatio;

        dispatch(setSlideData(data));
        dispatch(setSelectSlide(data[slideIdx]));
        dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
    };

    const remove_component = () => {
        // alert('remove ' + selectedComponent.src)
        let sd = cloneDeep(slidesData);
        sd[selectedSlide.index].components.splice(selectedComponent.index,1);

        for(let i=0; i<sd[selectedSlide.index].components.length; i++)
            sd[selectedSlide.index].components[i].index = i;

        let selected = cloneDeep(selectedSlide);
        selected.components.splice(selectedComponent.index,1);

        for(let i=0; i<selected.components.length; i++)
            selected.components[i].index = i;

        // dispatch(setSelectSlide(selected));
        // dispatch(setSelectComponent(null));
        // dispatch(setSlideData(sd));

        batch(() => {
            dispatch(setSlideData(sd));
            dispatch(setSelectSlide(selected));
            dispatch(setSelectComponent(null));
        });
    };

    const canc_remove_component = (event) => {
        // if(!selectedComponent || selectedComponent.type !== 'image')
        //     return;
        if(event.keyCode === 46)
            remove_component();
    };

    const copy_and_paste = (event) => {
        if(!selectedComponent || selectedComponent.type !== 'image')
            return;
        let key = event.which || event.keyCode; // keyCode detection
        let ctrl = event.ctrlKey ? event.ctrlKey : key === 17; // ctrl detection

        // if ( key === 86 && ctrl ) {
            // console.log("Ctrl + V Pressed !");
        // } else
        if ( key === 67 && ctrl ) {
            let copiedComponent = cloneDeep(selectedComponent);
            // copiedComponent.id = Math.random().toString(36).substr(2, 8).toUpperCase();
            copiedComponent.index = null;
            copiedComponent.x = 0;
            copiedComponent.y = 0;
            dispatch(copyComponent(copiedComponent));
            // console.log("Ctrl + C Pressed !");
        }
    };

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
                dispatch(setSelectSlide(data[slideIdx]));
                // todo?
                // dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
            }}
        >
            {({ errors, status, touched }) => (
                <Form>
                    <AutoSave debounceMs={300} />

                    <div className="form-group form-inline">
                        <label className="col-md-3 col-sm-3 _left">{translate('size', ln)}</label>
                        <label htmlFor="width" className="col-md-1 col-sm-1">{translate('width', ln)}:</label>
                        <Field name="width" type="number" className={'form-control col-md-2 col-sm-2' + (errors.width && touched.width ? ' is-invalid' : '')} />
                        <label htmlFor="height" className="col-md-1 col-sm-1">{translate('height', ln)}:</label>
                        <Field name="height" type="number" className={'form-control col-md-2 col-sm-2' + (errors.height && touched.height ? ' is-invalid' : '')} />
                        <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('keepRatio', ln)} onClick={keepRatio}>
                            <FontAwesomeIcon icon={selectedComponent.keepRatio ? faLock : faLockOpen} className="icon" />
                        </button>
                        <ErrorMessage name="width" component="div" className="invalid-feedback col-md-12 col-sm-12" />
                        <ErrorMessage name="height" component="div" className="invalid-feedback col-md-12 col-sm-12" />
                    </div>

                    <div className="form-group form-inline">
                        <label className="col-md-3 col-sm-3 _left">{translate('position', ln)}</label>
                        <label htmlFor="top" className="col-md-1 col-sm-1">X:</label>
                        <Field name="top" type="number" className={'form-control col-md-2 col-sm-2' + (errors.top && touched.top ? ' is-invalid' : '')} />
                        <label htmlFor="left" className="col-md-1 col-sm-1">Y:</label>
                        <Field name="left" type="number" className={'form-control col-md-2 col-sm-2' + (errors.left && touched.left ? ' is-invalid' : '')} />
                    </div>

                    <div className="form-group form-inline">
                        <label className="col-md-3 col-sm-3 _left"> </label>
                        <label htmlFor="zIndex" className="col-md-1 col-sm-1">Z:</label>
                        <Field name="zIndex" type="number" className={'form-control col-md-2 col-sm-2' + (errors.zIndex && touched.zIndex ? ' is-invalid' : '')} />
                        <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('bringsUp', ln)} onClick={bringsUp}>
                            <FontAwesomeIcon icon={faEye} className="icon" />
                        </button>
                    </div>

                    <div className="form-group form-inline">
                        <label className="col-md-3 col-sm-3 _left">{translate('scale', ln)}</label>
                        <label htmlFor="scaleX" className="col-md-1 col-sm-1">X:</label>
                        <Field name="scaleX" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                        <label htmlFor="scaleY" className="col-md-1 col-sm-1">Y:</label>
                        <Field name="scaleY" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
                        {/*<div className="custom-control custom-checkbox col-md-3 col-sm-3">*/}
                        {/*    <Field name="keepRatio" type="checkbox" className="custom-control-input" id="defaultUnchecked"/>*/}
                        {/*    <label className="custom-control-label" htmlFor="defaultUnchecked">{translate('lock', ln)}</label>*/}
                        {/*    /!*<FontAwesomeIcon icon={faLock} className="icon" />*!/*/}
                        {/*</div>*/}
                        <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('flipH', ln)} onClick={()=>flip('H')}>
                            <FontAwesomeIcon icon={faArrowsAltH} className="icon" />
                        </button>
                        <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('flipV', ln)} onClick={()=>flip('V')}>
                            <FontAwesomeIcon icon={faArrowsAltV} className="icon" />
                        </button>

                    </div>

                    <div className="form-group form-inline">
                        <label className="col-md-3 col-sm-3 _left">{translate('rotate', ln)}</label>
                        <label htmlFor="rotate" className="col-md-1 col-sm-1"> </label>
                        <Field name="rotate" type="number" className={'form-control col-md-2 col-sm-2' + (errors.rotate && touched.rotate ? ' is-invalid' : '')} />
                        <label htmlFor="rotate" className="col-md-2 col-sm-2"> {translate('degrees', ln)}</label>
                    </div>

                    <div className="form-group col-md-12 col-sm-12">
                        {/*<button type="submit" className="btn btn-primary mr-2">{translate('save', ln)}</button>*/}
                        {/*<button type="reset" className="btn btn-secondary mr-2">{translate('reset', ln)}</button>*/}
                        <button type="button" className="btn btn-danger" onClick={remove_component}>{translate('delete', ln)}</button>
                    </div>
                </Form>
            )}
        </Formik>
)};

// FORMIK + YUP --> https://jasonwatmore.com/post/2019/04/10/react-formik-form-validation-example
// AUTOSAVE --> https://github.com/jaredpalmer/formik/blob/e51f09a318cba216a1ba3932da0906202df0b979/examples/DebouncedAutoSave.js#L18