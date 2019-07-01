import React from 'react'

const defaultHeaderContent = () => {
  return (
    <h1 className="title">
      Lang Helper
    </h1>
  )
}

const Header = props => {
  return (
    <header>
      {props.children || defaultHeaderContent()}
    </header>
  )
}

export default Header;
