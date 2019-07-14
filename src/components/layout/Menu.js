import React from 'react'

import MenuItem from './MenuItem'
import menuItems from './menuItems'

const Menu = ({route = window.location.pathname}) => {
    const isNotSelectedMenu = item => (item.link !== route)

    const markItemAsActive = item => 
        isNotSelectedMenu(item) 
            ? item
            : { ...item, isActive: true }

    const menuItemsActivated = menuItems.map(markItemAsActive)

    return (
        <div className="tabs is-centered">
            <ul>
                { 
                    menuItemsActivated.map((item, i) => <MenuItem key={i} item={item} /> )
                }
            </ul>
        </div>
    )
}

export default Menu
