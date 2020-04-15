import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {translate} from "../helpers";
import { Button, Select, Modal, Row, Col, Popover } from 'antd';
import { CheckOutlined, BgColorsOutlined } from '@ant-design/icons';
import { SketchPicker } from 'react-color';
import { AntUpload } from "../CustomFormInput/AntUpload";

import '../../style/container/background-gallery-container.css'

export default function BackgroundGalleryContainer({isOpened, closeGallery}) {
    const ln = useSelector(state => state.selectedLanguage);

    const bg1 = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/forest.png",
            _id:'forest'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/sky.png",
            _id:'sky'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/anchor-156720_960_720.png",
            _id:'156720_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/astronaut-background-cartoon-cosmonaut.jpg",
            _id:'cosmonaut'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/astronaut-cartoon-earth-exploration.jpg",
            _id:'exploration'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/atmosphere-vehicle-space-circle-outer-space-earth-1405991-pxhere.com.png",
            _id:'1405991'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/beach-4496830_960_720.png",
            _id:'4496830_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-background-nature.jpg",
            _id:'nature'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-livingroom.png",
            _id:'livingroom'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-nature-lake.jpg",
            _id:'lake'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/cartoon-nature_2.jpg",
            _id:'nature_2'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/country-32248_960_720.png",
            _id:'32248_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/forest.jpg",
            _id:'forestforest'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/globe-308991_960_720.png",
            _id:'308991_960_720'

        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/kitchen-294596_960_720.png",
            _id:'294596_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/mare-molo.jpg",
            _id:'mare-molo'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature.jpg",
            _id:'naturecccc'
        },
    ];
    const bg2 = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-2679131_1280.jpg",
            _id:'2679131_1280'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-2829157_1280.png",
            _id:'2829157_1280'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/nature-4407819_960_720.png",
            _id:'4407819_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/night-rocket-sky-astronomy-blue-bright-1574183-pxhere.com.jpg",
            _id:'1574183'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/ocean-background-4090017_960_720.jpg",
            _id:'4090017_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/playground-2108649_960_720.png",
            _id:'2108649_960_720'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/seascape-backdrop.jpg",
            _id:'seascape-backdrop.'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/sunset.JPG",
            _id:'sunset'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/the-house-in-the-field.jpg",
            _id:'house-in-the-fie'
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/tree-sky-air-balloon-hot-air-balloon-wind-1210393-pxhere.com.jpg",
            _id:'1210393'
        }
    ];

    const [backgrounds, setBackgrounds] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState([]);
    const [selectedColor, setSelectedColor] = useState('#fafafa');
    const [selectedImg, setSelectedImg] = useState({});

    useEffect(()=>{
        const uploads = [];

        if(window.RESOURCES && window.RESOURCES.IMAGES)
            for(let i=0; i<window.RESOURCES.IMAGES.length; i++)
                uploads.push(window.RESOURCES.IMAGES[i])

        backgrounds[0] = uploads;
        backgrounds[1] = bg1;
        backgrounds[2] = bg2;

        setBackgrounds(backgrounds);
        setSelectedGallery(uploads.length ? backgrounds[0] :  backgrounds[1]);
    }, []);

    function selectGallery(idx) {
        setSelectedGallery(backgrounds[idx]);
    }

    const hasUploads = () => {
        return backgrounds[0] && backgrounds[0].length;
    };

    const { Option } = Select;

    const isSelected = (id) => {
        return selectedImg._id === id;
    };

    const handleItemClick = (item) => {
        setSelectedImg(item);
    };

    const handleChangeComplete = (color) => {
        setSelectedColor('rgba('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+','+color.rgb.a+')');
    };

    return (
        <Modal title={translate('selectBackground', ln)} visible={isOpened} width={'60vw'}
            bodyStyle={{maxHeight:'60vh', overflowX:'auto', backgroundColor:'transparent', padding:8}}
            onOk={() => closeGallery(selectedImg, selectedColor)}
            onCancel={() => closeGallery({_id:'@close'})}

            footer={[
                <Select key="select" defaultValue={hasUploads() ? "0" : "1"} onChange={selectGallery}>
                    {hasUploads() ? <Option value="0">{translate('optionUploads', ln)}</Option> : ''}
                    <Option value="1">{translate('optionBG1', ln)}</Option>
                    <Option value="2">{translate('optionBG2', ln)}</Option>
                </Select>,
                <Button key="cancel" onClick={() => closeGallery({_id:'@close'})}>{translate('buttonCancel', ln)}</Button>,
                <Button key="ok" type="primary" onClick={() => closeGallery(selectedImg, selectedColor)}>{translate('buttonOk', ln)}</Button>
            ]}
        >
            <Row className={'ant-image-grid'} gutter={[8, 8]}>
                <Col key={'@upload'} span={8}>
                    <div className={'upload' + (isSelected('item._id') ? ' selected' : '')}
                         onClick={()=>handleItemClick({_id:'@upload'})}
                    >
                        <AntUpload max={1} />
                        <CheckOutlined className={'check'} />
                    </div>
                </Col>
                <Col key={'@color'} span={8}>
                    <Popover content={(<SketchPicker color={selectedColor} onChangeComplete={handleChangeComplete} />)} trigger="click">
                        <div className={'select-color' + (isSelected('@color') ? ' selected' : '')}
                             onClick={()=>handleItemClick({_id:'@color'})}
                             style={{backgroundColor:selectedColor}}
                        >
                            <div className={'select-color-label'}>
                                <BgColorsOutlined />
                                <div>{translate('selectColor', ln)}</div>
                            </div>
                            <CheckOutlined className={'check'} />
                        </div>
                    </Popover>
                </Col>
                {selectedGallery.map(function(item, idx){
                    return (
                        <Col key={item._id} span={8}>
                            <div className={'img-preview' + (isSelected(item._id) ? ' selected' : '')}
                                 style={{backgroundImage: 'url(' + item.path + ')'}}
                                 onClick={()=>handleItemClick(item)}
                            >
                                {item.name ? <div className={'name'}>{item.name}</div> : ''}
                                <CheckOutlined className={'check'} />
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Modal>
    )
};