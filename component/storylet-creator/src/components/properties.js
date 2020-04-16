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

    const [selectedText, setSelectedText] = useState({startIndex:0, length:0});

    const [form] = Form.useForm();
    const size = window.screen.width <= 1280 ? "small" : "middle "; //todo large?
    const top = window.screen.width <= 1280 ? 4 : 0; //todo large?

    useEffect(()=>{
        if(!slidesData || !selectedSlide || !selectedComponent)
            return;

        let component = slidesData[selectedSlide.index].components[selectedComponent.index];

        setProperties(component);

    }, [slidesData]);

    useEffect(()=>{
        document.removeEventListener("keydown", copyAnPaste);
        document.removeEventListener('keydown', canc);

        if(!selectedComponent)
            return;

        setProperties(selectedComponent);

        document.addEventListener("keydown", copyAnPaste);
        document.addEventListener('keydown', canc);
        return function cleanup() {
            document.removeEventListener("keydown", copyAnPaste);
            document.removeEventListener('keydown', canc);
        };
    }, [selectedComponent]);

    const setProperties = (component) => {
        form.setFieldsValue({
            width: Math.round(component.w * 10) / 10,
            height: Math.round(component.h * 10) / 10,
            keepRatio: selectedComponent.keepRatio,
            top: Math.round(component.x * 10) / 10,
            left: Math.round(component.y * 10) / 10,
            zIndex: component.zIndex,
            scaleX: Math.round(component.scale[0] * 10) / 10,
            scaleY: Math.round(component.scale[1] * 10) / 10,
            rotate: Math.round(component.rotate * 10) / 10,

            // textValue: component.value,
            textValue: component.value ? component.value.replace(/<\/?[^>]+(>|$)/g, "") : null,
            fontFamily: selectedComponent.fontFamily,
            fontSize: selectedComponent.fontSize,
            color: selectedComponent.color,
            fontWeight: selectedComponent.fontWeight,
            fontStyle: selectedComponent.fontStyle,
            textDecoration: selectedComponent.textDecoration,
            textAlign: selectedComponent.textAlign,
            backgroundColor: selectedComponent.backgroundColor,
            balloon: selectedComponent.balloon,
            placement: selectedComponent.placement
        });
    };

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

    const setTextProperties = (prop, val) => {
        let slideIdx = selectedSlide.index;
        let componentIdx = selectedComponent.index;

        let data = cloneDeep(slidesData);

        if(selectedText.length > 0) {
            let value = data[slideIdx].components[componentIdx].value;
            if(prop==='fontWeight')
                data[slideIdx].components[componentIdx].value = formatSelected(value, 'font-weight:bold;');
            else if(prop==='fontStyle')
                data[slideIdx].components[componentIdx].value = formatSelected(value, 'font-style:italic;');
            else if(prop==='textDecoration')
                data[slideIdx].components[componentIdx].value = formatSelected(value, 'text-decoration:underline;');
        }
        else if(prop==='fontWeight') {
            if (selectedComponent.fontWeight === undefined || selectedComponent.fontWeight === 'normal')
                data[slideIdx].components[componentIdx].fontWeight = 'bold';
            else
                data[slideIdx].components[componentIdx].fontWeight = 'normal';
        } else if(prop==='fontStyle') {
            if(selectedComponent.fontStyle === undefined || selectedComponent.fontStyle === 'normal')
                data[slideIdx].components[componentIdx].fontStyle = 'italic';
            else
                data[slideIdx].components[componentIdx].fontStyle = 'normal';
        } else if(prop==='textDecoration') {
            if(selectedComponent.textDecoration === undefined || selectedComponent.textDecoration === 'none')
                data[slideIdx].components[componentIdx].textDecoration = 'underline';
            else
                data[slideIdx].components[componentIdx].textDecoration = 'none';
        } else if(prop==='textAlign') {
                data[slideIdx].components[componentIdx].textAlign = val;
        } else if(prop==='clear') {
            data[slideIdx].components[componentIdx].value = data[slideIdx].components[componentIdx].value.replace(/<\/?[^>]+(>|$)/g, "");
            data[slideIdx].components[componentIdx].fontFamily = '"Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif';
            data[slideIdx].components[componentIdx].fontSize = 24;
            data[slideIdx].components[componentIdx].color = undefined;
            data[slideIdx].components[componentIdx].backgroundColor = undefined;
            data[slideIdx].components[componentIdx].fontWeight = undefined;
            data[slideIdx].components[componentIdx].fontStyle = undefined;
            data[slideIdx].components[componentIdx].textDecoration = undefined;
            data[slideIdx].components[componentIdx].textAlign = undefined;
        }

        batch(() => {
            dispatch(setSlideData(data));
            dispatch(setSelectSlide(data[slideIdx]));
            dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
        });
    };

    const formatSelected = (value, style) => {
            let str = value.replace(/<\/?[^>]+(>|$)/g, "");
            let firstPart = str.substr(0,selectedText.startIndex);
            let selectedPart = str.substr(selectedText.startIndex,selectedText.length);
            let lastPart = str.substr(selectedText.startIndex+selectedText.length,str.length);

            return firstPart + "<span style='" + style + "'>" + selectedPart + "</span>" + lastPart;
    };

    const switchKeepRatio = () => {
        let changedFields = {keepRatio: !slidesData[selectedSlide.index].components[selectedComponent.index].keepRatio};

        onValuesChange(changedFields, changedFields);
    };

    const flip = (direction) => {debugger
        let changedFields;

        let scale =  slidesData[selectedSlide.index].components[selectedComponent.index].scale;
        if(direction==='H')
            changedFields = {scaleX: -scale[0], scaleY: scale[1]};
        else // V
            changedFields = {scaleX: scale[0], scaleY: -scale[1]};

        form.setFieldsValue(changedFields);
        onValuesChange(changedFields, changedFields);
    };

    const bringsUp = () => {
        let maxIndex = 0;
        for(let i=0; i<slidesData[selectedSlide.index].components.length; i++)
            maxIndex = Math.max(maxIndex, slidesData[selectedSlide.index].components[i].zIndex);

        let changedFields = {zIndex: maxIndex+1};
        form.setFieldsValue(changedFields);
        onValuesChange(changedFields);
    };

    // Form
    const onValuesChange = (changedFields, allFields) => {
        let _dispatch = false;
        let slideIdx = selectedSlide.index;
        let componentIdx = selectedComponent.index;
        let data = cloneDeep(slidesData);

        if(changedFields.width !== undefined && !isNaN(changedFields.width) && changedFields.width >= 5 && changedFields.width <= 100) {
            if(selectedComponent.keepRatio) {
                let ratio = changedFields.width / data[slideIdx].components[componentIdx].w;
                data[slideIdx].components[componentIdx].w = changedFields.width;
                data[slideIdx].components[componentIdx].h *= ratio;
            }
            else
                data[slideIdx].components[componentIdx].w = changedFields.width;
            _dispatch = true;
        }
        else if(changedFields.height !== undefined && !isNaN(changedFields.height) && changedFields.height >= 5 && changedFields.height <= 100) {
            if(selectedComponent.keepRatio) {
                let ratio = changedFields.height / data[slideIdx].components[componentIdx].h;
                data[slideIdx].components[componentIdx].h = changedFields.height;
                data[slideIdx].components[componentIdx].w *= ratio;
            }
            else
                data[slideIdx].components[componentIdx].h = changedFields.height;
            _dispatch = true;
        }
        else if(changedFields.top !== undefined && !isNaN(changedFields.top) && changedFields.top >= 0 && changedFields.top <= 100) {
            data[slideIdx].components[componentIdx].x = changedFields.top;
            _dispatch = true;
        }
        else if(changedFields.left !== undefined && !isNaN(changedFields.left) && changedFields.left >= 0 && changedFields.left <= 100) {
            data[slideIdx].components[componentIdx].y = changedFields.left;
            _dispatch = true;
        }
        else if(changedFields.zIndex !== undefined && !isNaN(changedFields.zIndex) && changedFields.zIndex >= 0 && changedFields.zIndex <= 10) {
            data[slideIdx].components[componentIdx].zIndex = changedFields.zIndex;
            _dispatch = true;
        }
        else if(changedFields.scaleX !== undefined && !isNaN(changedFields.scaleX) && ((changedFields.scaleX >= -2 && changedFields.scaleX <= -0.5) || (changedFields.scaleX <= 2 && changedFields.scaleX >= 0.5))){
            data[slideIdx].components[componentIdx].scale = [changedFields.scaleX,allFields.scaleY];
            _dispatch = true;
        }
        else if(changedFields.scaleY !== undefined && !isNaN(changedFields.scaleY) && ((changedFields.scaleY >= -2 && changedFields.scaleY <= -0.5) || (changedFields.scaleY <= 2 && changedFields.scaleY >= 0.5))){
            data[slideIdx].components[componentIdx].scale = [allFields.scaleX,changedFields.scaleY];
            _dispatch = true;
        }
        else if(changedFields.rotate !== undefined && !isNaN(changedFields.rotate) && changedFields.rotate >= -180 || changedFields.rotate <= 180){
            data[slideIdx].components[componentIdx].rotate = changedFields.rotate;
            _dispatch = true;
        }
        else if(changedFields.keepRatio !== undefined && typeof changedFields.keepRatio === "boolean"){
            data[slideIdx].components[componentIdx].keepRatio = changedFields.keepRatio;
            _dispatch = true;
        }
        else if(changedFields.textValue !== undefined) {
            data[slideIdx].components[componentIdx].value = changedFields.textValue;
            _dispatch = true;
        }
        else if(changedFields.fontFamily !== undefined) {
            data[slideIdx].components[componentIdx].fontFamily = changedFields.fontFamily;
            _dispatch = true;
        }
        else if(changedFields.fontSize !== undefined) {
            data[slideIdx].components[componentIdx].fontSize = changedFields.fontSize;
            _dispatch = true;
        }
        else if(changedFields.color !== undefined) {
            if(selectedText.length > 0)
                data[slideIdx].components[componentIdx].value = formatSelected(data[slideIdx].components[componentIdx].value, 'color:rgba('+changedFields.color.rgb.r+','+changedFields.color.rgb.g+','+changedFields.color.rgb.b+','+changedFields.color.rgb.a+')');
            else
                data[slideIdx].components[componentIdx].color = 'rgba('+changedFields.color.rgb.r+','+changedFields.color.rgb.g+','+changedFields.color.rgb.b+','+changedFields.color.rgb.a+')';
            _dispatch = true;
        }
        else if(changedFields.backgroundColor !== undefined) {
            if(selectedText.length > 0)
                data[slideIdx].components[componentIdx].value = formatSelected(data[slideIdx].components[componentIdx].value, 'background-color:rgba('+changedFields.backgroundColor.rgb.r+','+changedFields.backgroundColor.rgb.g+','+changedFields.backgroundColor.rgb.b+','+changedFields.backgroundColor.rgb.a+')');
            else
                data[slideIdx].components[componentIdx].backgroundColor = 'rgba('+changedFields.backgroundColor.rgb.r+','+changedFields.backgroundColor.rgb.g+','+changedFields.backgroundColor.rgb.b+','+changedFields.backgroundColor.rgb.a+')';
            _dispatch = true;
        }
        else if(changedFields.balloon !== undefined) {
            data[slideIdx].components[componentIdx].balloon = changedFields.balloon;
            _dispatch = true;
        }
        else if(changedFields.placement !== undefined) {
            data[slideIdx].components[componentIdx].placement = changedFields.placement;
            _dispatch = true;
        }

        if(_dispatch)
            batch(() => {
                dispatch(setSlideData(data));
                dispatch(setSelectSlide(data[slideIdx]));
                dispatch(setSelectComponent(data[slideIdx].components[componentIdx]));
            });
    };

    return (
        <Form form={form} onValuesChange={onValuesChange}>
            {selectedComponent.type === 'text' ?
                <>
                    <Divider orientation={"left"} style={{marginTop:0}}>{translate('text', ln)}</Divider>
                    <Row>
                        <Col span={18}>
                            <Form.Item name={"fontFamily"}>
                                <Select style={{width:'90%'}} defaultValue={0} size={size}>
                                    <Select.Option value={'"Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif'}>"Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif</Select.Option>
                                    <Select.Option value={'Georgia, serif'}>Georgia, serif</Select.Option>
                                    <Select.Option value={'"Palatino Linotype", "Book Antiqua", Palatino, serif'}>"Palatino Linotype", "Book Antiqua", Palatino, serif</Select.Option>
                                    <Select.Option value={'"Times New Roman", Times, serif'}>"Times New Roman", Times, serif</Select.Option>
                                    <Select.Option value={'Arial, Helvetica, sans-serif'}>Arial, Helvetica, sans-serif</Select.Option>
                                    <Select.Option value={'"Arial Black", Gadget, sans-serif'}>"Arial Black", Gadget, sans-serif</Select.Option>
                                    <Select.Option value={'"Comic Sans MS", cursive, sans-serif'}>"Comic Sans MS", cursive, sans-serif</Select.Option>
                                    <Select.Option value={'Impact, Charcoal, sans-serif'}>Impact, Charcoal, sans-serif</Select.Option>
                                    <Select.Option value={'"Lucida Sans Unicode", "Lucida Grande", sans-serif'}>"Lucida Sans Unicode", "Lucida Grande", sans-serif</Select.Option>
                                    <Select.Option value={'Tahoma, Geneva, sans-serif'}>Tahoma, Geneva, sans-serif</Select.Option>
                                    <Select.Option value={'"Trebuchet MS", Helvetica, sans-serif'}>"Trebuchet MS", Helvetica, sans-serif</Select.Option>
                                    <Select.Option value={'Verdana, Geneva, sans-serif'}>Verdana, Geneva, sans-serif</Select.Option>
                                    <Select.Option value={'"Courier New", Courier, monospace'}>"Courier New", Courier, monospace</Select.Option>
                                    <Select.Option value={'"Lucida Console", Monaco, monospace'}>"Lucida Console", Monaco, monospace</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item name={"fontSize"}>
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
                            <Button icon={<BoldOutlined />} size={size} onClick={()=>{setTextProperties('fontWeight')}} />
                            <Button icon={<ItalicOutlined />} size={size} onClick={()=>{setTextProperties('fontStyle')}} />
                            <Button icon={<UnderlineOutlined />} size={size} onClick={()=>{setTextProperties('textDecoration')}} />
                            <Popover content={(<Form.Item name={"color"}><SketchPicker color={selectedComponent.color} /></Form.Item>)} trigger="click">
                                <Button icon={<FontColorsOutlined />} size={size} />
                            </Popover>
                            <Button icon={<ClearOutlined />} size={size} onClick={()=>{setTextProperties('clear')}} />
                            <div className={"h-divider"}> </div>
                            <Button icon={<AlignLeftOutlined />} size={size} onClick={()=>{setTextProperties('textAlign', 'left')}} />
                            <Button icon={<AlignCenterOutlined />} size={size} onClick={()=>{setTextProperties('textAlign', 'center')}} />
                            <Button icon={<AlignRightOutlined />} size={size} onClick={()=>{setTextProperties('textAlign', 'right')}} />
                            <Popover content={(<Form.Item name={"backgroundColor"}><SketchPicker color={selectedComponent.backgroundColor} /></Form.Item>)} trigger="click">
                                <Button icon={<BgColorsOutlined />} size={size} />
                            </Popover>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item name={"textValue"}>
                                <Input.TextArea rows={4} onBlur={(e)=>{setSelectedText({startIndex: e.target.selectionStart, length: window.getSelection().toString().length})}} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider orientation={"left"} style={{marginTop:0}}>{translate('balloon', ln)}</Divider>
                    <Row>
                        <Col span={12}>
                            <Form.Item labelCol={{span:8}} wrapperCol={{span:14}} name={"balloon"} label={translate('balloonType', ln)}>
                                <Select defaultValue={'none'} size={size}>
                                    <Select.Option value={''}>{translate('noneOpt', ln)}</Select.Option>
                                    <Select.Option value={'balloon speech'}>{translate('speechOpt', ln)}</Select.Option>
                                    <Select.Option value={'balloon thought'}>{translate('thoughtOpt', ln)}</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item labelCol={{span:8}} wrapperCol={{span:14}} name={"placement"} label={translate('balloonPlacement', ln)}>
                                <Select size={size} defaultValue={'BL'}>
                                    <Select.Option value={'BL'}>{translate('BL', ln)}</Select.Option>
                                    <Select.Option value={'BR'}>{translate('BR', ln)}</Select.Option>
                                    <Select.Option value={'TL'}>{translate('TL', ln)}</Select.Option>
                                    <Select.Option value={'TR'}>{translate('TR', ln)}</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </> : null
            }
            <Divider orientation={"left"} style={{marginTop:0}}>{translate('size', ln)}</Divider>
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
                                <Button style={{top:top}} type="primary" icon={selectedComponent.keepRatio ? <LockOutlined /> : <UnlockOutlined />} size={size} onClick={switchKeepRatio} />
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
            <Divider style={{margin:0}}>
                <Button type="primary" danger onClick={removeComponent}>{translate('delete', ln)}</Button>
            </Divider>
        </Form>
    );
};