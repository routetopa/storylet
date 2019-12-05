import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';

import WordcloudContainer from './wordcloud-container'
import ImageGalleryContainer from './image-gallery-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faImage } from '@fortawesome/free-regular-svg-icons'
import { faFont, faPlus, faCopy } from '@fortawesome/free-solid-svg-icons'

import '../../vendor/bootstrap.min.css';
import '../../style/container/menu-container.css'

import setSlidesData from "../../reducer/actions/set-slides-data";
import selectSlide from "../../reducer/actions/select-slide";
import selectComponent from "../../reducer/actions/select-component";

export default function MenuContainer() {
    const dispatch = useDispatch();

    const slidesData = useSelector(state => state.slidesData);
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    const [slideIdx, setSlideIdx] = useState(null);
    const [componentIdx, setComponentIdx] = useState(null);

    const [startingWord, setStartingWord] = useState([]);
    const searchKey = useRef(null);

    const [isOpened, setIsOpened] = useState(false);

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
            "value": "nuovo testo",
            "x": 0,
            "y": 0,
            "w": 40,
            "h": 20,
            "scale": [1,1],
            "rotate": 0,
            "keepRatio": true,
            "zIndex": 0,
            "fontSize": 48,
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
        if(e.target.nodeName === "IMG") {
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
        }
        setIsOpened(false);
    };

    const update_slides_index = (data, idx) => {
        for(let i = idx; i<data.length; i++)
            data[i].index +=1;
    };

    const add_slide = () => {
        let data = cloneDeep(slidesData);

        let slide = {
            index:  data.length,
            background: "",
            components: [],
            id: data.length,
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

        dispatch(setSlidesData(data));
    };

    const copy_slide = () => {
        let data = cloneDeep(slidesData);
        let cloned_node = cloneDeep(data[slideIdx]);

        update_slides_index(data, slideIdx);
        data.splice(slideIdx, 0, cloned_node);
        dispatch(setSlidesData(data));
    };

    return (
        <>
            <div id="menu-container">
                <div className="buttons" >
                    <FontAwesomeIcon icon={faPlus} className="icon" onClick={add_slide} />
                    <FontAwesomeIcon icon={faCopy} className="icon" onClick={copy_slide} />
                    <FontAwesomeIcon icon={faFont} className="icon" onClick={add_text} />
                    <FontAwesomeIcon icon={faImage} className="icon" onClick={open_gallery} />
                </div>
                <div className="find-ideas">
                    <FontAwesomeIcon icon={faLightbulb} className="icon" onClick={get_words} />
                    <input id="SearchKey" ref={searchKey} className="form-control col-md-10 col-sm-10" />
                </div>
            </div>

            <WordcloudContainer startingWord={startingWord} />

            <ImageGalleryContainer isOpened={isOpened} closeGallery={close_gallery} />
        </>
    )
};