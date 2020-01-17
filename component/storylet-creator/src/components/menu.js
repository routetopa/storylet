import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import {translate} from "../components/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Style
import '../vendor/bootstrap.min.css';
import '../style/menu.css';

// Actions
import languageSelected from "../reducer/actions/select-language";

export default function Menu() {
    const dispatch = useDispatch();

    const [menuStatus, setMenuStatus] = useState('');
    const [autosave, setAutosave] = useState(false);
    const selectedLanguage = useSelector(state => state.selectedLanguage);
    const slidesData = useSelector(state => state.slidesData);

    useEffect(() => {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let ln = url.searchParams.get("ln");

        if(!ln)
            ln = navigator.language.split('-')[0];

        if(['en', 'it', 'es', 'fr', 'de'].indexOf(ln) === -1)
            ln = 'en';

        dispatch(languageSelected(ln));
    }, []);

    useEffect(() => {
        if(!selectedLanguage)
            return;

    }, [selectedLanguage]);

    useEffect(() => {
        if(autosave)
            save_storylet();
    }, [slidesData]);

    const toggle_sidebar = () => {
        if(menuStatus === '')
            setMenuStatus('open');
        else
            setMenuStatus('');
    };

    const save_storylet = () => {
        // console.log('save');
        // console.log(window.STORY.DATA.id);
        // console.log(slidesData);

        axios.put(window.API_ENDPOINT.SAVE_STORYLET, {
            storyletid: window.STORY.DATA.id,
            story     : slidesData,
        })
            .then((response) => {
                // console.log(response);
            }, (error) => {
                console.log(error);
            });
    };

    const set_autosave = () => {
        setAutosave(!autosave);
    };

    const set_language = (e) => {
        dispatch(languageSelected(e.target.value));
        // alert(e.target.value);
    };

    return (
        <div className="menu">
            <FontAwesomeIcon icon={faBars} className="icon" onClick={toggle_sidebar} />
            <div className={`sidebar ${menuStatus}`}>
                <div className="sidebarBody">
                    <div className="menu-item menu-btn" onClick={save_storylet}>{translate('save', selectedLanguage)}</div>
                    <div className="menu-item custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="menuAutosave" onChange={set_autosave} value="autosave"/>
                        <label className="custom-control-label ddr" htmlFor="menuAutosave">{translate('autosave', selectedLanguage)}</label>
                    </div>
                    {/*<div className="menu-item menu-btn">Esporta come PDF</div>*/}
                    {/*<div className="menu-item menu-btn">Esporta come Immagine</div>*/}
                    {/*<div className="menu-item menu-btn">Copia HTML</div>*/}
                    <div className="menu-item menu-select">
                        {translate('language', selectedLanguage)}
                        <select class="form-control" onChange={set_language}>
                            <option selected value="it">IT</option>
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                            <option value="fr">FR</option>
                            <option value="de">DE</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
};