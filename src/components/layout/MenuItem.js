import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({item}) => (
    <li className={ item.isActive ? "is-active" : "" }>
        <Link to={item.link}>{item.label}</Link>
    </li>
)

export default MenuItem
