import React from 'react'

import Info from '../info'
import Menu from '../menu'

import '../../style/container/header-container.css';

export default function HeaderContainer({hideSettings})
{
    return (
        <div className="header">
            <Menu />
            <div className="logo">D a t a  S t o r i e s</div>
            <Info hideSettings={hideSettings} />
        </div>
    )
};