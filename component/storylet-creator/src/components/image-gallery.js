import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {translate} from "./helpers";
import { Button, Select, Modal, Row, Col, Popover } from 'antd';
import { CheckOutlined, BgColorsOutlined } from '@ant-design/icons';
import { SketchPicker } from 'react-color';
import { AntUpload } from "./CustomFormInput/AntUpload";

import '../style/image-gallery.css'

export default function ImageGallery({isOpened, closeGallery, type}) {
    const ln = useSelector(state => state.selectedLanguage);

    const bg1 = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/forest.png",
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "backgrounds/sky.png",
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

    const fantastic_characters = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/001-centaur.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/002-kraken.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/003-dinosaur.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/004-tree-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/005-hand.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/006-echidna.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/007-robot.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/008-mushroom.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/009-harpy.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/010-phoenix.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/011-dragon-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/012-devil.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/013-troll.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/014-alien.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/015-minotaur.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/016-madre-monte.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/017-satyr.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/018-karakasakozou.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/019-pirate.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/020-werewolf.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/021-scarecrow.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/022-valkyrie.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/023-curupira.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/024-loch-ness-monster.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/025-tree.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/026-cerberus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/027-gryphon.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/028-mermaid.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/029-vampire.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/030-goblin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/031-yeti.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/032-leprechaun.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/033-medusa.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/034-chimera.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/035-elf.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/036-hydra.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/037-cyclops.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/038-pegasus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/039-narwhal.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/040-woodcutter.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/041-zombie.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/042-dragon.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/043-frankenstein.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/044-witch.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/045-fairy.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/046-genie.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/047-pinocchio.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/048-ghost.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/049-wizard.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "fantastic-characters/050-unicorn.png"
        },
        // {
        //     path: window.STATIC.IMAGE_BASE_PATH + "storylet-prof.png"
        // }
    ];
    const sea_life = [
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/001-octopus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/002-crab.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/003-oyster.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/004-dolphin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/005-starfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/006-flounder.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/007-shark.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/008-whale.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/009-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/010-swordfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/011-turtle.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/012-jellyfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/013-seahorse.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/014-puffer-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/015-sea-cow.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/016-orca.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/017-squid.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/018-coral.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/019-manta-ray.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/020-lobster.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/021-clam.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/022-seaweed.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/023-tuna.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/024-stingray.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/025-seal.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/026-eel.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/027-seagull.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/028-shrimp.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/029-anglerfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/030-beluga.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/031-walrus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/032-narwhal.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/033-diver.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/034-penguin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/035-hammerhead-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/036-hermit-crab.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/037-clownfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/038-surgeon-fish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/039-angelfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/040-sunfish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/041-sea-anemone.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/042-coral-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/043-fish-1.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/044-fish-2.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/045-cod.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/046-cuttlefish.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/047-nautilus.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/048-puffin.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/049-mussel.png"
        },
        {
            path: window.STATIC.IMAGE_BASE_PATH + "sea-life/050-sea-urchin.png"
        }
    ];

    const [images, setImages] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState([]);
    const [selectedColor, setSelectedColor] = useState('#fafafa');
    const [selectedImg, setSelectedImg] = useState({});

    useEffect(()=>{
        if(!type)
            return;
        const uploads = [];

        if(window.RESOURCES && window.RESOURCES.IMAGES)
            for(let i=0; i<window.RESOURCES.IMAGES.length; i++)
                if(window.RESOURCES.IMAGES[i].type === type)
                    uploads.push(window.RESOURCES.IMAGES[i]);

        images[0] = uploads;
        if(type === 'background') {
            images[1] = bg1;
            images[2] = bg2;
        } else if(type === 'image') {
            images[1] = fantastic_characters;
            images[2] = sea_life;
        }

        setImages(images);
        setSelectedGallery(uploads.length ? images[0] :  images[1]);
    }, [type]);

    function selectGallery(idx) {
        setSelectedGallery(images[idx]);
    }

    const getOptions = () => {
        let options = [];
        if(hasUploads())
            options.push(<Option key={0} value="0">{translate('optionUploads', ln)}</Option>)
        if(type === 'background') {
            options.push(<Option key={1} value="1">{translate('optionBG1', ln)}</Option>)
            options.push(<Option key={2} value="2">{translate('optionBG2', ln)}</Option>)
        } else if(type === 'image') {
            options.push(<Option key={1} value="1">{translate('fantasticCharacters', ln)}</Option>)
            options.push(<Option key={2} value="2">{translate('seaLife', ln)}</Option>)
        }
        return options;
    };

    const hasUploads = () => {
        return images[0] && images[0].length;
    };

    const { Option } = Select;

    const isSelected = (id) => {
        if(selectedImg._id)
            return selectedImg._id === id;
        return selectedImg.path === id;
    };

    const handleItemClick = (item) => {
        setSelectedImg(item);
    };

    const handleChangeComplete = (color) => {
        setSelectedColor('rgba('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+','+color.rgb.a+')');
    };

    return (
        <Modal title={type==='image' ? translate('selectImage', ln) : translate('selectBackground', ln)}
            visible={isOpened} width={'60vw'}
            bodyStyle={{maxHeight:'60vh', overflowX:'auto', backgroundColor:'transparent', padding:8}}
            onOk={() => closeGallery(selectedImg, selectedColor, type)}
            onCancel={() => closeGallery({_id:'@close'})}

            footer={[
                <Select key="select" defaultValue={hasUploads() ? "0" : "1"} onChange={selectGallery}>
                    {getOptions()}
                </Select>,
                <Button key="cancel" onClick={() => closeGallery({_id:'@close'})}>{translate('buttonCancel', ln)}</Button>,
                <Button key="ok" type="primary" onClick={() => closeGallery(selectedImg, selectedColor, type)}>{translate('buttonOk', ln)}</Button>
            ]}
        >
            <Row className={'ant-image-grid'} gutter={[8, 8]}>
                <Col key={'@upload'} span={8}>
                    <div className={'upload' + (isSelected('@upload') ? ' selected' : '')}
                         onClick={()=>handleItemClick({_id:'@upload'})}
                    >
                        <AntUpload max={1} />
                        <CheckOutlined className={'check'} />
                    </div>
                </Col>

                {type === 'background' ? <Col key={'@color'} span={8}>
                    <Popover content={(<SketchPicker color={selectedColor} onChangeComplete={handleChangeComplete}/>)}
                             trigger="click">
                        <div className={'select-color' + (isSelected('@color') ? ' selected' : '')}
                             onClick={() => handleItemClick({_id: '@color'})}
                             style={{backgroundColor: selectedColor}}
                        >
                            <div className={'select-color-label'}>
                                <BgColorsOutlined/>
                                <div>{translate('selectColor', ln)}</div>
                            </div>
                            <CheckOutlined className={'check'}/>
                        </div>
                    </Popover>
                </Col> : ''}
                {selectedGallery.map(function(item, idx){
                    return (
                        <Col key={idx} span={8}>
                            <div className={'img-preview' + (isSelected(item._id || item.path) ? ' selected' : '')}
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