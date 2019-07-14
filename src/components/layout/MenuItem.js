import React from 'react'

const MenuItem = ({item}) => (
    <li className={ item.isActive ? "is-active" : "" }>
        <a href={item.link}>{item.label}</a>
    </li>
)

export default MenuItem
