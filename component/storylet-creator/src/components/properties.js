import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import { Form, Input, InputNumber, Select, Upload, Switch, Checkbox, Button, notification, Tabs, Row, Col, Divider, Tooltip, Typography, Popover } from 'antd';
import {
    LockOutlined, UnlockOutlined, EyeOutlined, RotateRightOutlined,
    BoldOutlined, ItalicOutlined, UnderlineOutlined, ClearOutlined,
    FontColorsOutlined, HighlightOutlined, BgColorsOutlined, AlignCenterOutlined,
    AlignLeftOutlined, AlignRightOutlined
} from '@ant-design/icons';
import { SketchPicker } from 'react-color';
import {translate} from "./helpers";

import 'antd/dist/antd.css';
import '../style/properties.css';

import setSlideData from "../reducer/actions/set-slides-data";
import setSelectComponent from "../reducer/actions/select-component";
import setSelectSlide from "../reducer/actions/select-slide";
import copyComponent from "../reducer/actions/copy-component";

export default function Properties() {
    const dispatch = useDispatch();
    const ln = useSelector(state => state.selectedLanguage);
    const slidesData = useSelector(state => state.slidesData);
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    const [form] = Form.useForm();
    const size = window.screen.width <= 1280 ? "small" : "middle "; //todo large?
    const top = window.screen.width <= 1280 ? 4 : 0; //todo large?

    useEffect(()=>{
        if(!slidesData || !selectedSlide || !selectedComponent)
            return;

        let component = slidesData[selectedSlide.index].components[selectedComponent.index];

        form.setFieldsValue({
            width: Math.round(component.w * 10) / 10,
            height: Math.round(component.h * 10) / 10,
            top: Math.round(component.x * 10) / 10,
            left: Math.round(component.y * 10) / 10,
            zIndex: component.zIndex,
            scaleX: Math.round(component.scale[0] * 10) / 10,
            scaleY: Math.round(component.scale[1] * 10) / 10,
            rotate: Math.round(component.rotate * 10) / 10

            // keepRatio: selectedComponent.keepRatio,
            // color: selectedComponent.color,
            // size: selectedComponent.fontSize,
        });

    }, [slidesData]);

    useEffect(()=>{
        //todo accorpa con useEffect[slidesData] ?

        document.removeEventListener("keydown", copyAnPaste);
        document.removeEventListener('keydown', canc);

        if(!selectedComponent)
            return;

        //todo remove duplicate code
        form.setFieldsValue({
            width: Math.round(selectedComponent.w * 10) / 10,
            height: Math.round(selectedComponent.h * 10) / 10,
            top: Math.round(selectedComponent.x * 10) / 10,
            left: Math.round(selectedComponent.y * 10) / 10,
            zIndex: selectedComponent.zIndex,
            scaleX: Math.round(selectedComponent.scale[0] * 10) / 10,
            scaleY: Math.round(selectedComponent.scale[1] * 10) / 10,
            rotate: Math.round(selectedComponent.rotate * 10) / 10

            // keepRatio: selectedComponent.keepRatio,
            // color: selectedComponent.color,
            // size: selectedComponent.fontSize,
        });

        document.addEventListener("keydown", copyAnPaste);
        document.addEventListener('keydown', canc);
        return function cleanup() {
            document.removeEventListener("keydown", copyAnPaste);
            document.removeEventListener('keydown', canc);
        };
    }, [selectedComponent]);

    // Miscellaneous

    const copyAnPaste = (event) => {
        if(!selectedComponent)
            return;
        let key = event.which || event.keyCode; // keyCode detection
        let ctrl = event.ctrlKey ? event.ctrlKey : key === 17; // ctrl detection

        if ( key === 67 && ctrl ) {
            let copiedComponent = cloneDeep(selectedComponent);
            // copiedComponent.id = Math.random().toString(36).substr(2, 8).toUpperCase();
            copiedComponent.index = null;
            copiedComponent.x = 0;
            copiedComponent.y = 0;
            dispatch(copyComponent(copiedComponent));
        }
    };

    const canc = (event) => {
        if(event.keyCode === 46 && document.activeElement.tagName==='BODY')
            removeComponent();
    };

    const removeComponent = () => {
        let sd = cloneDeep(slidesData);
        sd[selectedSlide.index].components.splice(selectedComponent.index,1);

        for(let i=0; i<sd[selectedSlide.index].components.length; i++)
            sd[selectedSlide.index].components[i].index = i;

        let selected = cloneDeep(selectedSlide);
        selected.components.splice(selectedComponent.index,1);

        for(let i=0; i<selected.components.length; i++)
            selected.components[i].index = i;

        batch(() => {
            dispatch(setSlideData(sd));
            dispatch(setSelectSlide(selected));
            dispatch(setSelectComponent(null));
        });
    };

    const keepRatio = () => {
        //todo scale and size
    };

    const flip = (direction) => {

    };

    const bringsUp = () => {
        let zIndex = 0;
        for(let i=0; i<slidesData[selectedSlide.index].components.length; i++)
            zIndex = Math.max(zIndex, slidesData[selectedSlide.index].components[i].zIndex);

        form.setFieldsValue({
            zIndex: zIndex + 1
        });
        // onValuesChange()
    };

    // Color Picker
    const [color, setColor] = useState(
        {
            r: 21,
            g: 21,
            b: 21,
            a: 1
        });

    const handleChange = (color) => {
        setColor(color.rgb);
        // setTextColor('rgba('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+','+color.rgb.a+')');
    };

    // Form
    const onValuesChange = (changedFields, allFields) => {
        if(isNaN(allFields.width) || allFields.width < 5 || allFields.width > 100)
            return;
        if(isNaN(allFields.height) || allFields.height < 5 || allFields.height > 100)
            return;
        if(isNaN(allFields.top) || allFields.top < 0 || allFields.top > 100)
            return;
        if(isNaN(allFields.left) || allFields.left < 0 || allFields.left > 100)
            return;
        if(isNaN(allFields.zIndex) || allFields.zIndex < 0 || allFields.zIndex > 10)
            return;
        if(isNaN(allFields.scaleX) || allFields.scaleX < -3 || allFields.scaleX > 3 || (allFields.scaleX < 0.5 && allFields.scaleX > -0.5))
            return;
        if(isNaN(allFields.scaleY) || allFields.scaleY < -3 || allFields.scaleY > 3 || (allFields.scaleY < 0.5 && allFields.scaleY > -0.5))
            return;
        if(isNaN(allFields.rotate) || allFields.rotate < -180 || allFields.rotate > 180)
            return;

        let slideIdx = selectedSlide.index;
        let componentIdx = selectedComponent.index;

        let data = cloneDeep(slidesData);
        data[slideIdx].components[componentIdx].w = allFields.width;
        data[slideIdx].components[componentIdx].h = allFields.height;
        data[slideIdx].components[componentIdx].x = allFields.top;
        data[slideIdx].components[componentIdx].y = allFields.left;
        data[slideIdx].components[componentIdx].zIndex = allFields.zIndex;
        data[slideIdx].components[componentIdx].scale = [allFields.scaleX,allFields.scaleY];
        // data[slideIdx].components[componentIdx].keepRatio = allFields.keepRatio;
        data[slideIdx].components[componentIdx].rotate = allFields.rotate;

        batch(() => {
            dispatch(setSlideData(data));
            dispatch(setSelectSlide(data[slideIdx]));
            dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
        });
    };

    return (
        <Form form={form} onValuesChange={onValuesChange}>
            <Divider orientation={"left"}>{translate('text', ln)}</Divider>
            <Row>
                <Col span={18}>
                    <Form.Item>
                        <Select style={{width:'90%'}} defaultValue={0} size={size}>
                            <Select.Option value={0}>"Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif</Select.Option>
                            <Select.Option value={1}>Georgia, serif</Select.Option>
                            <Select.Option value={2}>"Palatino Linotype", "Book Antiqua", Palatino, serif</Select.Option>
                            <Select.Option value={3}>"Times New Roman", Times, serif</Select.Option>
                            <Select.Option value={4}>Arial, Helvetica, sans-serif</Select.Option>
                            <Select.Option value={5}>"Arial Black", Gadget, sans-serif</Select.Option>
                            <Select.Option value={6}>"Comic Sans MS", cursive, sans-serif</Select.Option>
                            <Select.Option value={7}>Impact, Charcoal, sans-serif</Select.Option>
                            <Select.Option value={8}>"Lucida Sans Unicode", "Lucida Grande", sans-serif</Select.Option>
                            <Select.Option value={9}>Tahoma, Geneva, sans-serif</Select.Option>
                            <Select.Option value={10}>"Trebuchet MS", Helvetica, sans-serif</Select.Option>
                            <Select.Option value={11}>Verdana, Geneva, sans-serif</Select.Option>
                            <Select.Option value={12}>"Courier New", Courier, monospace</Select.Option>
                            <Select.Option value={13}>"Lucida Console", Monaco, monospace</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Select style={{width:'100%'}} defaultValue={16} size={size}>
                            <Select.Option value={8}>8</Select.Option>
                            <Select.Option value={9}>9</Select.Option>
                            <Select.Option value={10}>10</Select.Option>
                            <Select.Option value={11}>11</Select.Option>
                            <Select.Option value={12}>12</Select.Option>
                            <Select.Option value={14}>14</Select.Option>
                            <Select.Option value={16}>16</Select.Option>
                            <Select.Option value={18}>18</Select.Option>
                            <Select.Option value={24}>24</Select.Option>
                            <Select.Option value={30}>30</Select.Option>
                            <Select.Option value={36}>36</Select.Option>
                            <Select.Option value={48}>48</Select.Option>
                            <Select.Option value={60}>60</Select.Option>
                            <Select.Option value={72}>72</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row className={"text-properties"}>
                <Col span={24}>
                    <Button icon={<BoldOutlined />} size={size} />
                    <Button icon={<ItalicOutlined />} size={size} />
                    <Button icon={<UnderlineOutlined />} size={size} />
                    <Popover content={(<SketchPicker color={color} onChange={handleChange} />)} trigger="click">
                        <Button icon={<FontColorsOutlined /*style={{color:textColor}}*/ />} size={size} />
                    </Popover>
                    <Button icon={<HighlightOutlined />} size={size} />
                    <Button icon={<ClearOutlined />} size={size} />
                    <div className={"h-divider"}> </div>
                    <Button icon={<AlignLeftOutlined />} size={size} />
                    <Button icon={<AlignCenterOutlined />} size={size} />
                    <Button icon={<AlignRightOutlined />} size={size} />
                    <Button icon={<BgColorsOutlined />} size={size} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Input.TextArea rows={4} />
                </Col>
            </Row>
            <Divider orientation={"left"}>{translate('size', ln)}</Divider>
            <Row>
                <Col span={12}>
                    <Form.Item name={"width"} label={translate('width', ln)} >
                        <InputNumber min={5} max={100} defaultValue={20} size={size} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={translate('height', ln)} >
                        <Input.Group compact>
                            <Form.Item name={"height"}>
                                <InputNumber min={5} max={100} defaultValue={20} size={size} />
                            </Form.Item>
                            <Tooltip title={translate('keepRatio', ln)}>
                                <Button style={{top:top}} type="primary" icon={<LockOutlined />} size={size} onClick={keepRatio} />
                            </Tooltip>
                        </Input.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Divider orientation={"left"} style={{marginTop:0}}>{translate('position', ln)}</Divider>
            <Row>
                <Col span={12}>
                    <Form.Item name={"top"} label={translate('top', ln)}>
                        <InputNumber min={0} max={100} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name={"left"} label={translate('left', ln)}>
                        <InputNumber min={0} max={100} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item label={translate('zIndex', ln)}>
                        <Input.Group compact>
                            <Form.Item name={"zIndex"}>
                                <InputNumber min={0} max={10} defaultValue={0} size={size} />
                            </Form.Item>
                            <Tooltip title={translate('bringsUp', ln)}>
                                <Button style={{top:top}} type="primary" icon={<EyeOutlined />} size={size} onClick={bringsUp} />
                            </Tooltip>
                        </Input.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Divider orientation={"left"} style={{marginTop:0}}>{translate('scale', ln)}</Divider>
            <Row>
                <Col span={12}>
                    <Form.Item label={translate('scaleX', ln)}>
                        <Input.Group compact>
                            <Form.Item name={"scaleX"}>
                                <InputNumber min={-3} max={3} defaultValue={1} step={0.1} size={size} />
                            </Form.Item>
                            <Tooltip title={translate('flipH', ln)}>
                                <Button style={{top:top}} type="primary" icon={<RotateRightOutlined />} size={size} onClick={()=>flip('H')} />
                            </Tooltip>
                        </Input.Group>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={translate('scaleY', ln)}>
                        <Input.Group compact>
                            <Form.Item name={"scaleY"}>
                                <InputNumber min={-3} max={3} defaultValue={1} step={0.1} size={size} />
                            </Form.Item>
                            <Tooltip title={translate('flipV', ln)}>
                                <Button style={{top:top}} type="primary" icon={<RotateRightOutlined rotate={90} />} size={size} onClick={()=>flip('V')} />
                            </Tooltip>
                        </Input.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Divider orientation={"left"} style={{marginTop:0}}>{translate('rotate', ln)}</Divider>
            <Row>
                <Col span={24}>
                    <Form.Item name={"rotate"} label={translate('degrees', ln)}>
                        <InputNumber min={-180} max={180} defaultValue={0} size={size} />
                    </Form.Item>
                </Col>
            </Row>
            <Divider style={{marginTop:0}}>
                <Button type="primary" danger onClick={removeComponent}>{translate('delete', ln)}</Button>
            </Divider>
        </Form>
    );
};