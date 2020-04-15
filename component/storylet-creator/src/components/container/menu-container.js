import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';

import WordContainer from './word-container'
import ImageGalleryContainer from './image-gallery-container'
import BackgroundGalleryContainer from './background-gallery-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFileImage, faImage, faFileVideo } from '@fortawesome/free-regular-svg-icons'
import { faFont, faPlusCircle, faTrashAlt, faCopy, faLink, faChartBar, faPlay,  faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { notification, Popconfirm } from 'antd';

// import '../../vendor/bootstrap.min.css';
import '../../style/container/menu-container.css'
import '../../vendor/tooltip.css';

import setSlidesData from "../../reducer/actions/set-slides-data";
import selectSlide from "../../reducer/actions/select-slide";
import selectComponent from "../../reducer/actions/select-component";

import {translate} from "../helpers";

export default function MenuContainer() {
    const ln = useSelector(state => state.selectedLanguage);

    const dispatch = useDispatch();

    const slidesData = useSelector(state => state.slidesData);
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    const [slideIdx, setSlideIdx] = useState(null);
    const [componentIdx, setComponentIdx] = useState(null);

    const [startingWord, setStartingWord] = useState([]);
    const searchKey = useRef(null);

    const [isOpened, setIsOpened] = useState(false);
    const [isOpenedB, setIsOpenedB] = useState(false);

    useEffect(()=>{
        if(!selectedSlide)
            return;

        setSlideIdx(selectedSlide.index);
    }, [selectedSlide]);

    useEffect(()=>{
        if(!selectedComponent)
            return;

        setComponentIdx(selectedComponent.index);
    }, [selectedComponent]);

    const play_story = async () => {
        window.open(window.STATIC.SITE_URL + 'storylet-viewer/' + window.STORY.DATA.id,'_blank')
    };

    function confirm(e) {
        play_story();
    }

    function cancel(e) {
        play_story()
    }

    const get_words = async () => {
        setStartingWord([searchKey.current.value]);
    };

    const add_text = () =>  {
        let data = cloneDeep(slidesData);

        let index = data[slideIdx].components.length;
        setComponentIdx(index);

        let component = {
            "index": index,
            "type": "text",
            "value": translate('newText', ln),
            "x": 0,
            "y": 0,
            "w": 40,
            "h": 20,
            "scale": [1,1],
            "rotate": 0,
            "keepRatio": false,
            "zIndex": 1,
            "fontSize": 24,
            "color": "#000000",
            "fontFamily": '"Helvetica Neue",Roboto,Arial,"Droid Sans",sans-serif',
            "baloon": "",
            "placement": 'BL',
        };

        data[slideIdx].components.push(component);

        batch(() => {
            dispatch(setSlidesData(data));
            dispatch(selectSlide(data[slideIdx]));
            dispatch(selectComponent(component));
        });
    };

    const open_gallery = () => {
        setIsOpened(true);
    };

    const close_gallery = (e) => {
        if(e.target.id === "image-gallery-close") {
            setIsOpened(false);
        }
        else if(e.target.nodeName === "IMG") {
            let data = cloneDeep(slidesData);

            let index = data[slideIdx].components.length;
            setComponentIdx(index);

            let component = {
                "index": index,
                "type": "image",
                "x": 0,
                "y": 0,
                "w": 40,
                "h": e.target.height / e.target.width * 40,
                "scale": [1,1],
                "rotate": 0,
                "keepRatio": true,
                "zIndex": 0,
                "src": e.target.src
            };

            data[slideIdx].components.push(component);

            batch(() => {
                dispatch(setSlidesData(data));
                dispatch(selectSlide(data[slideIdx]));
                dispatch(selectComponent(component));
            });

            setIsOpened(false);
        }
    };

    const open_background_gallery = () => {
        setIsOpenedB(true);
    };

    const close_background_gallery = (item, color) => {
        if(item._id === '@close') {
            setIsOpenedB(false);
        }
        else if(item._id === '@color') {
            let data = cloneDeep(slidesData);

            data[slideIdx].background = undefined;
            data[slideIdx].backgroundColor = color;

            batch(() => {
                dispatch(setSlidesData(data));
                dispatch(selectSlide(data[slideIdx]));
            });

            setIsOpenedB(false);
        }
        else if(item._id === '@upload') {
            alert('Aloha Andrea!')
        }
        else {
            let data = cloneDeep(slidesData);

            data[slideIdx].background = item.path;

            batch(() => {
                dispatch(setSlidesData(data));
                dispatch(selectSlide(data[slideIdx]));
            });

            setIsOpenedB(false);
        }
    };

    const update_slides_index = (data, idx) => {
        for(let i = idx; i<data.length; i++)
            data[i].index +=1;
    };

    const add_slide = () => {
        let data = cloneDeep(slidesData);

        let slide = {
            id: Math.random().toString(36).substr(2, 8).toUpperCase(),
            index:  data.length,
            background: "",
            components: [],
            type: ""
        };

        if(slideIdx !== null)
        {
            slide.index = slideIdx + 1;
            update_slides_index(data, slideIdx + 1);
            data.splice(slideIdx + 1, 0, slide);
        } else {
            data.push(slide);
        }

        batch(() => {
            dispatch(setSlidesData(data));
            dispatch(selectSlide(data[slideIdx+1]));
            dispatch(selectComponent(null));
        });
    };

    const copy_slide = () => {
        let data = cloneDeep(slidesData);
        let cloned_node = cloneDeep(data[slideIdx]);

        cloned_node.id = Math.random().toString(36).substr(2, 8).toUpperCase();

        update_slides_index(data, slideIdx);
        data.splice(slideIdx, 0, cloned_node);

        batch(() => {
            dispatch(setSlidesData(data));
            dispatch(selectSlide(data[slideIdx+1]));
            dispatch(selectComponent(null));
        });
    };

    const remove_slide = () => {
        let data = cloneDeep(slidesData);

        // if 1 slide return
        if(data.length===1) {
            alert('Impossibile eliminare la scena');//todo localization
            return
        }

        //todo meglio!
        data.splice(slideIdx, 1);
        for(let i = 0; i< data.length; i++)
            data[i].index = i;

        let goto = slideIdx === 0 ? 0 : slideIdx-1;

        batch(() => {
            dispatch(setSlidesData(data));
            dispatch(selectSlide(data[goto]));
            dispatch(selectComponent(null));
        });
    };

    const move_up = () => {
        let data = cloneDeep(slidesData);

        if(slideIdx===0)
            return;

        data[slideIdx].index -= 1;
        data[slideIdx-1].index += 1;

        let tmp = data[slideIdx];
        data[slideIdx] = data[slideIdx-1];
        data[slideIdx-1] = tmp;

        let goto = slideIdx-1;

        batch(() => {
            dispatch(setSlidesData(data));
            dispatch(selectSlide(data[goto]));
            dispatch(selectComponent(null));
        });
    };

    const move_down = () => {
        let data = cloneDeep(slidesData);

        if(slideIdx===data.length-1)
            return;

        data[slideIdx].index += 1;
        data[slideIdx+1].index -= 1;

        let tmp = data[slideIdx];
        data[slideIdx] = data[slideIdx+1];
        data[slideIdx+1] = tmp;

        let goto = slideIdx+1;

        batch(() => {
            dispatch(setSlidesData(data));
            dispatch(selectSlide(data[goto]));
            dispatch(selectComponent(null));
        });    };

    return (
        <>
            <div id="menu-container">
                <div className="component-buttons-container" >
                    <div data-tooltip={translate('addText', ln)}>
                        <FontAwesomeIcon icon={faFont} className="icon add-text" onClick={add_text} />
                    </div>
                    <div data-tooltip={translate('addBackground', ln)}>
                        <FontAwesomeIcon icon={faImage} className="icon add-image" onClick={open_background_gallery} />
                    </div>
                    <div data-tooltip={translate('addImage', ln)}>
                        <FontAwesomeIcon icon={faFileImage} className="icon add-image" onClick={open_gallery} />
                    </div>
                    <div data-tooltip={translate('playStoryPreview', ln)}>
                        <FontAwesomeIcon icon={faPlay} className="icon open-preview" onClick={play_story} />
                        {/*<Popconfirm*/}
                        {/*    placement="right"*/}
                        {/*    title={translate('saveBeforePlay', ln)}*/}
                        {/*    onConfirm={confirm}*/}
                        {/*    onCancel={cancel}*/}
                        {/*    okText={translate('yes', ln)}*/}
                        {/*    cancelText={translate('no', ln)}*/}
                        {/*>*/}
                        {/*    <FontAwesomeIcon icon={faPlay} className="icon open-preview" />*/}
                        {/*</Popconfirm>*/}
                    </div>
                </div>

                <div className="slide-buttons-container">
                    <div data-tooltip={translate('moveUpSlide', ln)}>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} className="icon move-up-slide" onClick={move_up} />
                    </div>
                    <div data-tooltip={translate('moveDownSlide', ln)}>
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon move-down-slide" onClick={move_down} />
                    </div>
                    <div data-tooltip={translate('removeSlide', ln)}>
                        <FontAwesomeIcon icon={faTrashAlt} className="icon remove-slide" onClick={remove_slide} />
                    </div>
                    <div data-tooltip={translate('duplicateSlide', ln)}>
                        <FontAwesomeIcon icon={faCopy} className="icon duplicate-slide" onClick={copy_slide} />
                    </div>
                    <div data-tooltip={translate('addSlide', ln)}>
                        <FontAwesomeIcon icon={faPlusCircle} className="icon add-slide" onClick={add_slide} />
                    </div>
                </div>

                <div className="find-ideas">
                    <div data-tooltip={translate('fantasyHelper', ln)}>
                        <FontAwesomeIcon icon={faLightbulb} className="icon" onClick={get_words} />
                    </div>
                    <input placeholder={translate('keyword', ln)} id="SearchKey" ref={searchKey} className="form-control col-md-10 col-sm-10" onKeyPress={(e)=>{if (e.key === 'Enter') get_words()}} />
                </div>
            </div>

            <WordContainer startingWord={startingWord} />

            <ImageGalleryContainer isOpened={isOpened} closeGallery={close_gallery} />
            <BackgroundGalleryContainer isOpened={isOpenedB} closeGallery={close_background_gallery} />
        </>
    )
};