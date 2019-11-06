import React from 'react'

import Info from '../info'
import Menu from '../menu'

import '../../style/container/header-container.css';

export default function HeaderContainer()
{
    return (
        <div className="header">
            <Menu />
            <div className="logo"> </div>
            <Info />
        </div>
    )
};