import React from 'react'

import '../style/menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Menu()
{
    return (
        <div className="menu">
            <FontAwesomeIcon icon={faBars} className="icon" />

        </div>
    )
};