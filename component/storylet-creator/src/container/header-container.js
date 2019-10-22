import React from 'react'

import Info from '../component/info'
import Menu from '../component/menu'

import HeaderContainerStyle from '../style/header-container-style'

export default function HeaderContainer()
{
    return (
        <HeaderContainerStyle>
            <Menu />
            <Info />
        </HeaderContainerStyle>
    )
};