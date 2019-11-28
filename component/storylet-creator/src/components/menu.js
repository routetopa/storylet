import React, {useState} from 'react'

import '../style/menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import axios from "axios";

export default function Menu()
{
    const [menuStatus, setMenuStatus] = useState('');
    const slidesData = useSelector(state => state.slidesData);

    const toggle_sidebar = () =>
    {
       if(menuStatus === '')
            setMenuStatus('open');
       else
           setMenuStatus('');
    };

    const save_storylet = () =>
    {
        console.log('save');
        console.log(window.STORY.DATA.id);
        console.log(slidesData);

        axios.put(window.API_ENDPOINT.SAVE_STORYLET, {
            storyletid: window.STORY.DATA.id,
            story     : slidesData,
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <div className="menu">
            <FontAwesomeIcon icon={faBars} className="icon" onClick={toggle_sidebar} />
            <div className={`sidebar ${menuStatus}`}>
                <div className="sidebarHeader">
                    <div onClick={toggle_sidebar}>CLOSE</div>
                </div>
                <div className="sidebarBody">
                    <div onClick={save_storylet}>SAVE</div>
                </div>
            </div>
        </div>
    )
};