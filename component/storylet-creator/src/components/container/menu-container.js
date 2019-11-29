import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import cloneDeep from 'lodash/cloneDeep';

import WordcloudContainer from './wordcloud-container'
import ImageGalleryContainer from './image-gallery-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faImage } from '@fortawesome/free-regular-svg-icons'
import { faFont } from '@fortawesome/free-solid-svg-icons'

import '../../vendor/bootstrap.min.css';
import '../../style/container/menu-container.css'

import addText from "../../reducer/actions/add-text";
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

    const [words, setWords] = useState([]);
    const searchKey = useRef(null);

    const [isOpened, setIsOpened] = useState(false);

    useEffect(()=>{
        if(!selectedSlide)
            return;

        setSlideIdx(selectedSlide.index);

        console.log("spa")
    }, [selectedSlide]);

    useEffect(()=>{
        if(!selectedComponent)
            return;

        setComponentIdx(selectedComponent.index);
    }, [selectedComponent]);

    const get_words = async () =>
    {
        axios.get('https://api.wordassociations.net/associations/v1.0/json/search?apikey=ebb2ab66-af3f-42c9-bc24-8072f0c413d5&text=' + searchKey.current.value + '&lang=it&limit=50')
            .then((response) => {
                setWords(response.data.response[0].items)
            }, (error) => {
                console.log(error);
            });

        // {
        //     text: 'cane',
        //     lang: 'it', // en fr de pt ru es
        //     type: 'response', // stimulus
        //     limit: '50', // max 300
        //     pos: 'noun,adjective,verb,adverb',
        //     indent: 'yes' // no
        // }
    };

    const add_text = () =>
    {
        // dispatch(addText({id:Math.random()}));
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

        dispatch(setSlidesData(data));
        dispatch(selectSlide(data[slideIdx]));
        dispatch(selectComponent(component));
    };

    const open_gallery = () =>
    {
        setIsOpened(true);
    };

    const close_gallery = () =>
    {
        setIsOpened(false);
    };

    return (
        <>
            <div id="menu-container">
                <div className="buttons" >
                    <FontAwesomeIcon icon={faFont} className="icon" onClick={add_text} />
                    {/*<select className="form-control col-md-10 col-sm-10">*/}
                    {/*    <option>Fantasia</option>*/}
                    {/*    <option>Catalogo 2</option>*/}
                    {/*</select>*/}
                    <FontAwesomeIcon icon={faImage} className="icon" onClick={open_gallery} />
                </div>
                <div className="find-ideas">
                    <FontAwesomeIcon icon={faLightbulb} className="icon" onClick={get_words} />
                    <input id="SearchKey" ref={searchKey} className="form-control col-md-10 col-sm-10" />
                </div>
            </div>

            <WordcloudContainer words={words} />

            <ImageGalleryContainer isOpened={isOpened} closeGallery={close_gallery} />
        </>
    )
};