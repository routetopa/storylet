import React, {useState, useEffect} from 'react'
import {batch, useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import {translate} from "../components/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import cloneDeep from 'lodash/cloneDeep';

// Style
// import '../vendor/bootstrap.min.css';
import '../style/menu.css';

// Actions
import languageSelected from "../reducer/actions/select-language";
import setStorylet from "../reducer/actions/set-storylet";
import { Select, Switch, notification, Popconfirm } from 'antd';
import setViewMode from "../reducer/actions/set-view-mode";
import componentSelected from "../reducer/actions/select-component";

export default function Menu() {
    const dispatch = useDispatch();

    const [menuStatus, setMenuStatus] = useState('');
    const [autosave, setAutosave] = useState(false);
    const [language, setLanguage] = useState('it');
    const [slidesSidebarStatus, setSlidesSidebarStatus] = useState(true);
    const selectedLanguage = useSelector(state => state.selectedLanguage);
    const slidesData = useSelector(state => state.slidesData);
    const storylet = useSelector(state => state.storylet);
    const viewMode = useSelector(state => state.viewMode);

    const openNotificationWithIcon = type => {
        if(type==='success')
            notification[type]({
                message: translate('saved', language),
                description: translate('hasBeenSuccessfullySaved', language)
            });
        else if(type==='error')
            notification[type]({
                message: translate('error', language),
                // description: translate('hasBeenSuccessfullySaved', language)
            });
        };

    // useEffect(() => {
    //     let url_string = window.location.href;
    //     let url = new URL(url_string);
    //     let ln = url.searchParams.get("ln");
    //
    //     if(!ln)
    //         ln = navigator.language.split('-')[0];
    //
    //     if(['en', 'it', 'es', 'fr', 'de'].indexOf(ln) === -1)
    //         ln = 'en';
    //
    //     dispatch(languageSelected(ln));
    // }, []);

    useEffect(() => {
        if(storylet) {
            if(storylet.language) {
                setLanguage(storylet.language);
                dispatch(languageSelected(storylet.language));
            } else {
                let url_string = window.location.href;
                let url = new URL(url_string);
                let ln = url.searchParams.get("ln");

                if(!ln)
                    ln = navigator.language.split('-')[0];

                if(['en', 'it', 'es', 'fr', 'de'].indexOf(ln) === -1)
                    ln = 'en';

                dispatch(languageSelected(ln));
            }

            if(storylet.autosave)
                setAutosave(storylet.autosave);
        }
    }, [storylet, dispatch]);

    // useEffect(() => {
    //     if(!selectedLanguage)
    //         return;
    // }, [selectedLanguage]);

    useEffect(() => {
        if(slidesData && storylet)
        if(autosave)
            save_storylet();
    }, [slidesData, storylet]);

    const toggle_sidebar = () => {
        if(menuStatus === '')
            setMenuStatus('open');
        else
            setMenuStatus('');
    };

    const toggle_slides_sidebar = () =>{
        let data = cloneDeep(viewMode);
        data.slides_sidebar = !data.slides_sidebar
        batch(() => {
            dispatch(componentSelected(null))
            dispatch(setViewMode(data));
        });

    }
    const save_storylet = (exit=false) => {
        debugger
        axios.put(window.API_ENDPOINT.SAVE_STORYLET, {
            storyletid: window.STORY.DATA.id,
            story     : slidesData,
            metadata  : storylet
        })
            .then((response) => {
                if(exit === true) //save and exit
                    window.location.href = window.STATIC.EXIT_URL;
                if(!autosave)
                    openNotificationWithIcon('success');
                // console.log(response);
            }, (error) => {
                openNotificationWithIcon('error');
                console.log(error);
            });
    };

    const set_autosave = () => {
        let data = cloneDeep(storylet);
        data.autosave = !autosave;

        batch(() => {
            dispatch(setStorylet(data));
        });

        setAutosave(!autosave);

        if(autosave) {
            save_storylet()
        }
    };

    const set_language = (value) => {
        let data = cloneDeep(storylet);
        data.language = value;

        batch(() => {
            dispatch(setStorylet(data));
        });

        dispatch(languageSelected(value));
    };

    function confirm(e) {
        save_storylet(true);
        // console.log(e);
    }

    function cancel(e) {
        window.location.href = window.STATIC.EXIT_URL;
        // console.log(e);
    }

    function export_HTML() {
        alert('Export HTML')
    }

    return (
        <div className="menu">
            <div>
                <FontAwesomeIcon style={{position: 'relative', float: 'left', marginRight: '16px'}} icon={faBars} className="icon" onClick={toggle_sidebar} />
                <FontAwesomeIcon style={{position: 'relative', float: 'left'}} icon={viewMode.slides_sidebar ? faArrowCircleLeft : faArrowCircleRight} className="icon" onClick={toggle_slides_sidebar} />
            </div>
            <div className={`sidebar ${menuStatus}`}>
                <div className="sidebarBody">
                    <div className="menu-item menu-btn" onClick={()=>save_storylet()}>{translate('save', selectedLanguage)}</div>
                    <div className="menu-item">
                        {translate('autosave', language)}
                        <Switch checked={autosave} size={'small'} onChange={set_autosave}/>
                    </div>

                    <div className="menu-item">
                        {translate('language', selectedLanguage)}
                        <Select value={language} onChange={set_language}>
                            <Select.Option value="it">IT</Select.Option>
                            <Select.Option value="en">EN</Select.Option>
                            <Select.Option value="es">ES</Select.Option>
                            <Select.Option value="fr">FR</Select.Option>
                            <Select.Option value="de">DE</Select.Option>
                        </Select>
                    </div>

                    {/*<div className="menu-item">*/}
                    {/*    <div onClick={()=>export_HTML()} >{translate('exportHTML', language)}</div>*/}
                    {/*</div>*/}

                    <div className="menu-item menu-btn">
                        <Popconfirm
                            placement="right"
                            title={translate('saveBeforeExit', language)}
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText={translate('yes', language)}
                            cancelText={translate('no', language)}
                        >
                            <div className="">{translate('exit', language)}</div>
                        </Popconfirm>
                    </div>

                </div>
            </div>
        </div>
    )
};