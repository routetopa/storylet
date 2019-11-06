import React from 'react'

import Info from '../component/info'
import Menu from '../component/menu'

import '../style/header-container.css';

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