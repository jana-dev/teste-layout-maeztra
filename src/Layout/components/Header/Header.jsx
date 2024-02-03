import React from 'react'
import { HeaderPromo } from './HeaderPromo/HeaderPromo'
import { HeaderMenu } from './HeaderMenu/HeaderMenu'
import { HeaderNav } from './HeaderNav/HeaderNav'

const Header = () => {
    return (
        <header>
            <HeaderPromo />
            <HeaderMenu />
            <HeaderNav />
        </header>
    )
}

export default Header