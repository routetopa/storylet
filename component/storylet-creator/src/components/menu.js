import React, {useState, useEffect} from 'react'
import {batch, useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import {translate} from "../components/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import cloneDeep from 'lodash/cloneDeep';


// Style
import '../vendor/bootstrap.min.css';
import '../style/menu.css';

// Actions
import languageSelected from "../reducer/actions/select-language";
import storylet from "../reducer/storylet";
import setStorylet from "../reducer/actions/set-storylet";

export default function Menu() {
    const dispatch = useDispatch();

    const [menuStatus, setMenuStatus] = useState('');
    const [autosave, setAutosave] = useState(false);
    const [language, setLanguage] = useState('it');
    const selectedLanguage = useSelector(state => state.selectedLanguage);
    const slidesData = useSelector(state => state.slidesData);
    const storylet = useSelector(state => state.storylet);

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
    }, [storylet]);

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

    const save_storylet = () => {
        console.log("******** AUTOSAVE ********");
        console.log(slidesData);
        console.log(storylet);
        axios.put(window.API_ENDPOINT.SAVE_STORYLET, {
            storyletid: window.STORY.DATA.id,
            story     : slidesData,
            metadata  : storylet
        })
            .then((response) => {
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

    return (
        <div className="menu">
            <FontAwesomeIcon icon={faBars} className="icon" onClick={toggle_sidebar} />
            <div className={`sidebar ${menuStatus}`}>
                <div className="sidebarBody">
                    <div className="menu-item menu-btn" onClick={save_storylet}>{translate('save', selectedLanguage)}</div>
                    {/*<div className="menu-item custom-checkbox">*/}
                    {/*    <input type="checkbox" checked={autosave ? "checked" : ""} className="custom-control-input" id="menuAutosave" onChange={set_autosave} value="autosave"/>*/}
                    {/*    <label className="custom-control-label ddr" htmlFor="menuAutosave">{translate('autosave', selectedLanguage)}</label>*/}
                    {/*</div>*/}
                    <div className="property-row custom-checkbox">
                        <input checked={autosave ? "checked" : ""} type="checkbox" className="custom-control-input" id="menuAutosave" onChange={set_autosave} value="autosave"/>
                        <label className="custom-control-label ddr" htmlFor="menuAutosave">{translate('autosave', language)}</label>
                    </div>
                    {/*<div className="menu-item menu-btn">Esporta come PDF</div>*/}
                    {/*<div className="menu-item menu-btn">Esporta come Immagine</div>*/}
                    {/*<div className="menu-item menu-btn">Copia HTML</div>*/}
                    <div className="menu-item menu-select">
                        {translate('language', selectedLanguage)}
                        <select class="form-control" onChange={set_language}>
                            <option selected={language === "it" ? "selected" : ""} value="it">IT</option>
                            <option selected={language === "en" ? "selected" : ""} value="en">EN</option>
                            <option selected={language === "es" ? "selected" : ""} value="es">ES</option>
                            <option selected={language === "fr" ? "selected" : ""} value="fr">FR</option>
                            <option selected={language === "de" ? "selected" : ""} value="de">DE</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
};