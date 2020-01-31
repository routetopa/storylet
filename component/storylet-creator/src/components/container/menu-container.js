import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';

import WordContainer from './word-container'
import ImageGalleryContainer from './image-gallery-container'
import BackgroundGalleryContainer from './background-gallery-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faFileImage, faImage, faFileVideo } from '@fortawesome/free-regular-svg-icons'
import { faFont, faPlusCircle, faTrashAlt, faCopy, faLink, faChartBar, faPlay } from '@fortawesome/free-solid-svg-icons'

import '../../vendor/bootstrap.min.css';
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
            "fontSize": 32,
            "color": "#000000"
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

    const close_background_gallery = (e) => {
        if(e.target.id === "image-gallery-close") {
            setIsOpenedB(false);
        }
        else if(e.target.nodeName === "IMG") {
            let data = cloneDeep(slidesData);

            data[slideIdx].background = e.target.src;

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
            alert('Impossibile eliminare la scena');
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

    return (
        <>
            <div id="menu-container">
                <div className="buttons" >
                    <FontAwesomeIcon icon={faPlusCircle} className="icon slide-control add-slide" onClick={add_slide} />
                    <FontAwesomeIcon icon={faCopy} className="icon slide-control duplicate-slide" onClick={copy_slide} />
                    <FontAwesomeIcon icon={faTrashAlt} className="icon slide-control remove-slide" onClick={remove_slide} />
                    <FontAwesomeIcon icon={faFont} className="icon add-text" onClick={add_text} />
                    <FontAwesomeIcon icon={faFileImage} className="icon add-image" onClick={open_gallery} />
                    <FontAwesomeIcon icon={faImage} className="icon add-image" onClick={open_background_gallery} />
                    {/*<FontAwesomeIcon icon={faFileVideo} className="icon add-video" />*/}
                    {/*<FontAwesomeIcon icon={faLink} className="icon add-link" />*/}
                    {/*<FontAwesomeIcon icon={faChartBar} className="icon add-datalet" />*/}
                    <FontAwesomeIcon icon={faPlay} onClick={() => window.open(window.STATIC.SITE_URL + 'storylet-viewer/' + window.STORY.DATA.id,'_blank')} className="icon open-preview" />
                </div>
                <div className="find-ideas">
                    <FontAwesomeIcon icon={faLightbulb} className="icon" onClick={get_words} />
                    <input id="SearchKey" ref={searchKey} className="form-control col-md-10 col-sm-10" onKeyPress={(e)=>{if (e.key === 'Enter') get_words()}} />
                </div>
            </div>

            <WordContainer startingWord={startingWord} />

            <ImageGalleryContainer isOpened={isOpened} closeGallery={close_gallery} />
            <BackgroundGalleryContainer isOpened={isOpenedB} closeGallery={close_background_gallery} />
        </>
    )
};