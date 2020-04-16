import React, {useState, useEffect} from 'react'
import {batch, useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import {translate} from "../components/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import cloneDeep from 'lodash/cloneDeep';


// Style
// import '../vendor/bootstrap.min.css';
import '../style/menu.css';

// Actions
import languageSelected from "../reducer/actions/select-language";
import setStorylet from "../reducer/actions/set-storylet";
import { notification, Popconfirm } from 'antd';

export default function Menu() {
    const dispatch = useDispatch();

    const [menuStatus, setMenuStatus] = useState('');
    const [autosave, setAutosave] = useState(false);
    const [language, setLanguage] = useState('it');
    const selectedLanguage = useSelector(state => state.selectedLanguage);
    const slidesData = useSelector(state => state.slidesData);
    const storylet = useSelector(state => state.storylet);

    const openNotificationWithIcon = type => {
        notification[type]({
            message: translate('saved', language),
            description: translate('hasBeenSuccessfullySaved', language)
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

    const save_storylet = (exit=false) => {
        return
        // debugger
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

    const set_language = (e) => {
        let data = cloneDeep(storylet);
        data.language = e.target.value;

        batch(() => {
            dispatch(setStorylet(data));
        });

        dispatch(languageSelected(e.target.value));
    };

    function confirm(e) {
        save_storylet(true);
        // console.log(e);
    }

    function cancel(e) {
        window.location.href = window.STATIC.EXIT_URL;
        // console.log(e);
    }

    return (
        <div className="menu">
            <FontAwesomeIcon icon={faBars} className="icon" onClick={toggle_sidebar} />
            <div className={`sidebar ${menuStatus}`}>
                <div className="sidebarBody">
                    <div className="menu-item menu-btn" onClick={()=>save_storylet()}>{translate('save', selectedLanguage)}</div>
                    <div className="menu-item property-row custom-checkbox">
                        <input checked={autosave ? "checked" : ""} type="checkbox" className="custom-control-input" id="menuAutosave" onChange={set_autosave} value="autosave"/>
                        <label className="custom-control-label ddr" htmlFor="menuAutosave">{translate('autosave', language)}</label>
                    </div>
                    <div className="menu-item menu-select">
                        {translate('language', selectedLanguage)}
                        <select value={language} className="form-control" onChange={set_language}>
                            <option value="it">IT</option>
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                            <option value="fr">FR</option>
                            <option value="de">DE</option>
                        </select>
                    </div>

                        <div className="menu-item menu-btn">
                            <Popconfirm
                                placement="right"
                                title={translate('saveBeforeExit', language)}
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText={translate('yes', language)}
                                cancelText={translate('no', language)}
                            >
                                <div className="inner-btn">{translate('exit', language)}</div>
                            </Popconfirm>
                        </div>

                </div>
            </div>
        </div>
    )
};