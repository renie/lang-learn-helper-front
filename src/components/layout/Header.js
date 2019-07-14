import React from 'react'

import Menu from './Menu'

const defaultHeaderContent = () => (
    <h1 className="title has-text-centered is-marginless">
        Lang Helper
    </h1>
)

const Header = ({children}) => (
    <header>
        { children || defaultHeaderContent() }
        <Menu/>
    </header>
)

export default Header;
