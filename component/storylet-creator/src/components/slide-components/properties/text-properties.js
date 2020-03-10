import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import { Form, Input, InputNumber, Select, Upload, Switch, Checkbox, Button, notification, Tabs, Row, Col, Divider, Tooltip, Typography } from 'antd';
import { LockOutlined, UnlockOutlined, EyeOutlined, RotateRightOutlined, FontColorsOutlined, BgColorsOutlined } from '@ant-design/icons';
import { SketchPicker } from 'react-color';
import {translate} from "../../helpers";

import 'antd/dist/antd.css';

import setSlideData from "../../../reducer/actions/set-slides-data";
import setSelectComponent from "../../../reducer/actions/select-component";
import setSelectSlide from "../../../reducer/actions/select-slide";
import copyComponent from "../../../reducer/actions/copy-component";

export default function TextProperties()
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
        document.removeEventListener('keydown', canc_remove_component);
        document.removeEventListener("keydown", copy_and_paste);
        if(!selectedComponent || selectedComponent.type !== 'text')
            return;
        document.addEventListener('keydown', canc_remove_component);
        document.addEventListener("keydown", copy_and_paste);
        return function cleanup() {
            document.removeEventListener('keydown', canc_remove_component);
            document.removeEventListener("keydown", copy_and_paste);
        };
    }, [selectedComponent]);

    useEffect(()=>{
        if(!slidesData || !selectedSlide || !selectedComponent)
            return;

        let component = slidesData[selectedSlide.index].components[selectedComponent.index];

        setInitialValues({
            width: Math.round(component.w * 10) / 10,
            height: Math.round(component.h * 10) / 10,
            color: component.color,
            size: component.fontSize,
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
        if(!selectedComponent || selectedComponent.type !== 'text')
            return;

        setInitialValues({
            width: Math.round(selectedComponent.w * 10) / 10,
            height: Math.round(selectedComponent.h * 10) / 10,
            color: selectedComponent.color,
            size: selectedComponent.fontSize,
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
        // if(!selectedComponent || selectedComponent.type !== 'text')
        //     return;
        if(event.keyCode === 46)
            remove_component();
    };

    const copy_and_paste = (event) => {
        if(!selectedComponent || selectedComponent.type !== 'text')
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

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 16,
        },
    };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    const handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    const handleChange = (color) => {
        setColor(color.rgb);
        setTextColor('rgba(0,255,255,1)');
    };



    const [textColor, setTextColor] = useState('rgba(21,21,21,0.5)');
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState(
        {
            r: 51,
            g: 51,
            b: 51,
            a: 1,
        });

    const choseTextColor = () => {
        setDisplayColorPicker(true);
    };

    const size = "medium"; //todo --> according to size
    const { Title } = Typography;

    return (
        <Form
            // name="basic"
            // initialValues={{
            //     remember: true,
            // }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // layout={"inline"}
        >

            {/*<Title level={4}>{translate('size', ln)}</Title>*/}
            <Divider orientation={"left"}>{translate('size', ln)}</Divider>
            <Row>
                <Col span={10}>
                    <Form.Item label={translate('width', ln)} >
                        <InputNumber min={0} max={100} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item label={translate('height', ln)} >
                        <InputNumber min={0} max={100} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Tooltip title={translate('keepRatio', ln)}>
                        <Switch style={{marginTop:5}}
                            checkedChildren={<LockOutlined />}
                            unCheckedChildren={<UnlockOutlined />}
                            defaultChecked
                            onChange={keepRatio}
                        />
                    </Tooltip>
                </Col>
            </Row>

            <Divider orientation={"left"} style={{marginTop:0}}>{translate('position', ln)}</Divider>
            <Row>
                <Col span={10}>
                    <Form.Item label={translate('top', ln)}>
                        <InputNumber min={0} max={100} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item label={translate('left', ln)}>
                        <InputNumber min={0} max={100} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item label={translate('zIndex', ln)}>
                        <Input.Group compact>
                            <InputNumber min={0} max={8} defaultValue={0} size={size} />
                            <Tooltip title={translate('bringsUp', ln)}>
                                <Button type="primary" icon={<EyeOutlined />} shape={"circle"} size={size} onClick={bringsUp} />
                            </Tooltip>
                        </Input.Group>
                    </Form.Item>
                </Col>
            </Row>

            <Divider orientation={"left"} style={{marginTop:0}}>{translate('scale', ln)}</Divider>
            <Row>
                <Col span={10}>
                    <Form.Item label={translate('scaleX', ln)}>
                        <Input.Group compact>
                            <InputNumber min={0} max={8} defaultValue={0} size={size} />
                            <Tooltip title={translate('flipH', ln)}>
                                <Button type="primary" icon={<RotateRightOutlined style={{fontSize: '24px'}} />} size={size} onClick={()=>flip('H')} />
                            </Tooltip>
                        </Input.Group>
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item label={translate('scaleY', ln)}>
                        <Input.Group compact>
                            <InputNumber min={0} max={8} defaultValue={0} size={size} />
                            <Tooltip title={translate('flipV', ln)}>
                                <Button type="primary" icon={<RotateRightOutlined style={{fontSize: '24px'}} rotate={90} />} size={size} onClick={()=>flip('V')} />
                            </Tooltip>
                        </Input.Group>
                    </Form.Item>
                </Col>
            </Row>

            <Divider orientation={"left"} style={{marginTop:0}}>{translate('rotate', ln)}</Divider>
            <Row>
                <Col span={24}>
                    <Form.Item label={translate('deg', ln)}>
                        <InputNumber min={-180} max={180} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
            </Row>

            <Divider style={{marginTop:0}}><Title level={4}>{translate('font', ln)}</Title></Divider>

            <Form.Item label={translate('color', ln)}>
                <Button icon={<FontColorsOutlined style={{color:textColor}} />} onClick={choseTextColor} />
                {/*<Button icon={<BgColorsOutlined style={{color: 'red'}} />}/>*/}
                popover instead of div
                { displayColorPicker ? <div style={{position:'absolute', bottom:0, left:38, zIndex:1}}> <SketchPicker color={color} onChange={handleChange} /> </div> : null }
            </Form.Item>

            background color
            font size
            font family
            font alignmentcos

            {/*<Form.Item label={translate('color', ln)}>*/}
            {/*    <Button icon={<FontColorsOutlined style={{color: 'red'}} />}/>*/}
            {/*</Form.Item>*/}

            {/*<Form.Item label={translate('size', ln)}>*/}
            {/*    <Input size={"small"} />*/}
            {/*</Form.Item>*/}

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );



    // return (
    //     <Formik
    //         enableReinitialize={true}
    //         initialValues={initialValues}
    //
    //         validationSchema={Yup.object().shape({
    //             width: Yup.number()
    //                 .min(0, 'Width must be at least 1% of slide width')
    //                 .max(100, 'Width must be at most 100% of slide width'),
    //             height: Yup.number()
    //                 .min(0, 'Width must be at least 1% of slide width')
    //                 .max(100, 'Width must be at most 100% of slide width')
    //         })}
    //
    //         onSubmit={fields => {
    //
    //             let slideIdx = selectedSlide.index;
    //             let componentIdx = selectedComponent.index;
    //
    //             let data = cloneDeep(slidesData);
    //             data[slideIdx].components[componentIdx].w = fields.width;
    //             data[slideIdx].components[componentIdx].h = fields.height;
    //             data[slideIdx].components[componentIdx].color = fields.color;
    //             data[slideIdx].components[componentIdx].fontSize = fields.size;
    //             data[slideIdx].components[componentIdx].x = fields.top;
    //             data[slideIdx].components[componentIdx].y = fields.left;
    //             data[slideIdx].components[componentIdx].zIndex = fields.zIndex;
    //             data[slideIdx].components[componentIdx].scale = [fields.scaleX,fields.scaleY];
    //             data[slideIdx].components[componentIdx].keepRatio = fields.keepRatio;
    //             data[slideIdx].components[componentIdx].rotate = fields.rotate;
    //
    //             dispatch(setSlideData(data));
    //             dispatch(setSelectSlide(data[slideIdx]));
    //             // todo?
    //             // dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
    //         }}
    //     >
    //         {({ errors, status, touched }) => (
    //             <Form>
    //                 <AutoSave debounceMs={300} />
    //
    //                 <div className="form-group form-inline">
    //                     <label className="col-md-3 col-sm-3 _left">{translate('size', ln)}</label>
    //                     <label htmlFor="width" className="col-md-1 col-sm-1">{translate('width', ln)}:</label>
    //                     <Field name="width" type="number" className={'form-control col-md-2 col-sm-2' + (errors.width && touched.width ? ' is-invalid' : '')} />
    //                     <label htmlFor="height" className="col-md-1 col-sm-1">{translate('height', ln)}:</label>
    //                     <Field name="height" type="number" className={'form-control col-md-2 col-sm-2' + (errors.height && touched.height ? ' is-invalid' : '')} />
    //                     <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('keepRatio', ln)} onClick={keepRatio}>
    //                         <FontAwesomeIcon icon={selectedComponent.keepRatio ? faLock : faLockOpen} className="icon" />
    //                     </button>
    //                     <ErrorMessage name="width" component="div" className="invalid-feedback col-md-12 col-sm-12" />
    //                     <ErrorMessage name="height" component="div" className="invalid-feedback col-md-12 col-sm-12" />
    //                 </div>
    //
    //                 <div className="form-group form-inline">
    //                     <label className="col-md-3 col-sm-3 _left">{translate('position', ln)}</label>
    //                     <label htmlFor="top" className="col-md-1 col-sm-1">X:</label>
    //                     <Field name="top" type="number" className={'form-control col-md-2 col-sm-2' + (errors.top && touched.top ? ' is-invalid' : '')} />
    //                     <label htmlFor="left" className="col-md-1 col-sm-1">Y:</label>
    //                     <Field name="left" type="number" className={'form-control col-md-2 col-sm-2' + (errors.left && touched.left ? ' is-invalid' : '')} />
    //                 </div>
    //
    //                 <div className="form-group form-inline">
    //                     <label className="col-md-3 col-sm-3 _left"> </label>
    //                     <label htmlFor="zIndex" className="col-md-1 col-sm-1">Z:</label>
    //                     <Field name="zIndex" type="number" className={'form-control col-md-2 col-sm-2' + (errors.zIndex && touched.zIndex ? ' is-invalid' : '')} />
    //                     <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('bringsUp', ln)} onClick={bringsUp}>
    //                         <FontAwesomeIcon icon={faEye} className="icon" />
    //                     </button>
    //                 </div>
    //
    //                 <div className="form-group form-inline">
    //                     <label className="col-md-3 col-sm-3 _left">{translate('scale', ln)}</label>
    //                     <label htmlFor="scaleX" className="col-md-1 col-sm-1">X:</label>
    //                     <Field name="scaleX" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
    //                     <label htmlFor="scaleY" className="col-md-1 col-sm-1">Y:</label>
    //                     <Field name="scaleY" type="number" className={'form-control col-md-2 col-sm-2' + (errors.scale && touched.scale ? ' is-invalid' : '')} />
    //                     <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('flipH', ln)} onClick={()=>flip('H')}>
    //                         <FontAwesomeIcon icon={faArrowsAltH} className="icon" />
    //                     </button>
    //                     <button type="button" className="btn btn-primary btn-flip" data-tooltip={translate('flipV', ln)} onClick={()=>flip('V')}>
    //                         <FontAwesomeIcon icon={faArrowsAltV} className="icon" />
    //                     </button>
    //
    //                 </div>
    //
    //                 <div className="form-group form-inline">
    //                     <label className="col-md-3 col-sm-3 _left">{translate('rotate', ln)}</label>
    //                     <label htmlFor="rotate" className="col-md-1 col-sm-1"> </label>
    //                     <Field name="rotate" type="number" className={'form-control col-md-2 col-sm-2' + (errors.rotate && touched.rotate ? ' is-invalid' : '')} />
    //                     <label htmlFor="rotate" className="col-md-2 col-sm-2"> {translate('degrees', ln)}</label>
    //                 </div>
    //
    //                 <div className="form-group form-inline">
    //                     <label className="col-md-3 col-sm-3 _left">{translate('font', ln)}</label>
    //                     <label htmlFor="color" className="col-md-2 col-sm-2">{translate('color', ln)}:</label>
    //                     <Field name="color" type="text" className={'form-control col-md-2 col-sm-2' + (errors.color && touched.color ? ' is-invalid' : '')} />
    //                     <label htmlFor="size" className="col-md-2 col-sm-2">{translate('size2', ln)}:</label>
    //                     <Field name="size" type="number" className={'form-control col-md-2 col-sm-2' + (errors.size && touched.size ? ' is-invalid' : '')} />
    //                     <ErrorMessage name="color" component="div" className="invalid-feedback col-md-12 col-sm-12" />
    //                     <ErrorMessage name="size" component="div" className="invalid-feedback col-md-12 col-sm-12" />
    //                 </div>
    //
    //                 <div className="form-group col-md-12 col-sm-12">
    //                     {/*<button type="submit" className="btn btn-primary mr-2">{translate('save', ln)}</button>*/}
    //                     {/*<button type="reset" className="btn btn-secondary mr-2">{translate('reset', ln)}</button>*/}
    //                     <button type="button" className="btn btn-danger" onClick={remove_component}>{translate('delete', ln)}</button>
    //                 </div>
    //             </Form>
    //         )}
    //     </Formik>
    // )
};