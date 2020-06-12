import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch, batch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import { Input } from 'antd';

import WordContainer from './word-container'
import ImageGallery from '../image-gallery'
// import DataletsCreator from '../datalets-creator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faComment, faLightbulb, faFileImage, faImage } from '@fortawesome/free-regular-svg-icons'
import { faFont, faPlusCircle, faTrashAlt, faCopy, faPlay, faArrowAltCircleUp, faArrowAltCircleDown, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'

import '../../style/container/menu-container.css'
import '../../vendor/tooltip.css';

import setSlidesData from "../../reducer/actions/set-slides-data";
import selectSlide from "../../reducer/actions/select-slide";
import selectComponent from "../../reducer/actions/select-component";

import {translate} from "../helpers";
// import copyComponent from "../../reducer/actions/copy-component";

export default function MenuContainer() {
    const ln = useSelector(state => state.selectedLanguage);

    const dispatch = useDispatch();

    const slidesData = useSelector(state => state.slidesData);
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    const [slideIdx, setSlideIdx] = useState(null);
    // const [componentIdx, setComponentIdx] = useState(null);

    const [startingWord, setStartingWord] = useState([]);
    const searchKey = useRef(null);

    const [isOpened, setIsOpened] = useState(false);
    // const [isCreatorOpened, setIsCreatorOpened] = useState(false);
    const [imagesType, setImagesType] = useState(false);
    const [undoPointer, setUndoPointer] = useState(0);

    useEffect(()=>{
        if(!selectedSlide)
            return;

        setSlideIdx(selectedSlide.index);
    }, [selectedSlide]);

    useEffect(()=>{
        if(!selectedComponent)
            return;

        // setComponentIdx(selectedComponent.index);
    }, [selectedComponent]);

    const play_story = async () => {
        window.open(window.STATIC.SITE_URL + 'storylet-viewer/' + window.STORY.DATA.id,'_blank')
    };

    // function confirm(e) {
    //     play_story();
    // }
    //
    // function cancel(e) {
    //     play_story()
    // }

    const get_words = async () => {
        setStartingWord([searchKey.current.state.value]);
    };

    const add_text = (isBalloon) =>  {
        let data = cloneDeep(slidesData);

        let index = data[slideIdx].components.length;
        // setComponentIdx(index);

        let component = {
            "index": index,
            "type": "text",
            "subType": "balloon",
            "value": isBalloon ? translate('newSpeech', ln) : translate('newText', ln),
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
            "balloon": isBalloon ? "balloon speech" : "",
            "placement": 'BL',
        };

        data[slideIdx].components.push(component);

        batch(() => {
            dispatch(setSlidesData(data));
            dispatch(selectSlide(data[slideIdx]));
            dispatch(selectComponent(component));
        });
    };

    const open_gallery = (type) => {
        setImagesType(type);
        setIsOpened(true);
    };

    const close_gallery = (item, color, type) => {
        if(item._id === '@close') {
            setIsOpened(false);
        }
        else if(item._id === '@color') {
            let data = cloneDeep(slidesData);

            data[slideIdx].background = undefined;
            data[slideIdx].backgroundColor = color;

            batch(() => {
                dispatch(setSlidesData(data));
                dispatch(selectSlide(data[slideIdx]));
            });

            setIsOpened(false);
        }
        else if(item._id === '@upload') {
            //todo background or image?
            alert('Aloha Andrea!')
        }
        else if(type === 'background') {
            let data = cloneDeep(slidesData);

            data[slideIdx].background = item.path;

            batch(() => {
                dispatch(setSlidesData(data));
                dispatch(selectSlide(data[slideIdx]));
            });

            setIsOpened(false);
        }
        else if(type === 'image') {
            let data = cloneDeep(slidesData);

            let index = data[slideIdx].components.length;
            // setComponentIdx(index);

            let component = {
                "index": index,
                "type": "image",
                "x": 0,
                "y": 0,
                "w": 40,
                // "h": e.target.height / e.target.width * 40,
                "h": 40,
                "scale": [1,1],
                "rotate": 0,
                "keepRatio": true,
                "zIndex": 0,
                "src": item.path
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

    // const open_creator = () => {
    //     setIsCreatorOpened(true);
    // };
    //
    // const add_datalet = () => {
    //     alert('add datalet');
    //     setIsCreatorOpened(false);
    // };

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

    /*ctrl-z*/
    useEffect(()=>{
        // console.log('pointer: ' + undoPointer);
        document.removeEventListener("keydown", undo_redo);
        document.addEventListener("keydown", undo_redo);
        return function cleanup() {
            document.removeEventListener("keydown", undo_redo);
        };
    }, [undoPointer]);

    useEffect(() => {
        if(!slidesData || slidesData.length===0)
            return;

        if(selectedComponent !== 0) { // not if undo
            let data = cloneDeep(slidesData);
            let history = cloneDeep(window.HISTORY.DATA);
            window.HISTORY.DATA = history.slice(0, undoPointer+1);

            window.HISTORY.DATA.push(
                {
                    slidesData: data,
                    slideIdx: slideIdx || data[0].index,
                }
            );

            if(window.HISTORY.DATA.length > 6) // todo limit 5 undo
                window.HISTORY.DATA.shift();

            setUndoPointer(window.HISTORY.DATA.length-1);
        }

        // console.log(window.HISTORY.DATA.length + ' elementi');

    }, [slidesData]);

    const undo_redo = (event) => {
        let key = event.which || event.keyCode; // keyCode detection
        let ctrl = event.ctrlKey ? event.ctrlKey : key === 17; // ctrl detection

        if (event === '@undo' || (key === 90 && ctrl)) {
            if(undoPointer === 0)
                return;
            // console.log('UNDO '+(undoPointer-1));
            let data = cloneDeep(window.HISTORY.DATA[undoPointer-1]);
            setUndoPointer(undoPointer => undoPointer-1);

            batch(() => {
                dispatch(setSlidesData(data.slidesData));
                dispatch(selectSlide(data.slidesData[data.slideIdx]));
                dispatch(selectComponent(0));
            });
        }
        else if (event === '@redo' || (key === 89 && ctrl)) {
            if(undoPointer === window.HISTORY.DATA.length-1)
                return;
            // console.log('REDO '+(undoPointer+1));
            let data = cloneDeep(window.HISTORY.DATA[undoPointer+1]);
            setUndoPointer(undoPointer => undoPointer+1);

            batch(() => {
                dispatch(setSlidesData(data.slidesData));
                dispatch(selectSlide(data.slidesData[data.slideIdx]));
                dispatch(selectComponent(0));
            });
        }
    };

    return (
        <>
            <div id="menu-container">
                <div className="component-buttons-container" >
                    <div data-tooltip={translate('addText', ln)}>
                        <FontAwesomeIcon icon={faFont} className="icon add-text" onClick={()=> {add_text(false)}} />
                    </div>
                    <div data-tooltip={translate('addBalloon', ln)}>
                        <FontAwesomeIcon icon={faComment} className="icon add-balloon" onClick={()=> {add_text(true)}} />
                    </div>
                    <div data-tooltip={translate('addImage', ln)}>
                        <FontAwesomeIcon icon={faFileImage} className="icon add-image" onClick={()=>open_gallery('image')} />
                    </div>
                    <div data-tooltip={translate('addBackground', ln)}>
                        <FontAwesomeIcon icon={faImage} className="icon add-bg" onClick={()=>open_gallery('background')} />
                    </div>
                    {/*<div data-tooltip={translate('addDatalet', ln)}>*/}
                    {/*    <FontAwesomeIcon icon={faChartBar} className="icon add-datalet" onClick={()=>open_creator()} />*/}
                    {/*</div>*/}
                    <div className={'menu-separator'}> </div>
                    <div data-tooltip={translate('undo', ln)}>
                        <FontAwesomeIcon icon={faUndo} className="icon undo" onClick={()=>undo_redo('@undo')} />
                    </div>
                    <div data-tooltip={translate('redo', ln)}>
                        <FontAwesomeIcon icon={faRedo} className="icon undo" onClick={()=>undo_redo('@redo')} />
                    </div>
                    <div className={'menu-separator'}> </div>
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
                    <Input placeholder={translate('keyword', ln)}
                           id="SearchKey" ref={searchKey}
                           onKeyPress={(e)=>{if (e.key === 'Enter') get_words()}} />
                </div>
            </div>

            <WordContainer startingWord={startingWord} />

            <ImageGallery isOpened={isOpened} type={imagesType} closeGallery={close_gallery} />

            {/*<DataletsCreator isOpened={isCreatorOpened} addDatalet={add_datalet} />*/}
        </>
    )
};