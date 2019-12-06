import React from 'react'

import '../style/info.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

export default function Info({hideSettings})
{
    return (
        <div className="info">
            <FontAwesomeIcon onClick={hideSettings} icon={faInfoCircle} className="icon" />
        </div>
    )
};