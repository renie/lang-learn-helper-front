import React from 'react'

const defaultHeaderContent = () => {
  return (
    <h1>
      Lang Helper
    </h1>
  )
}

const Header = props => {
  return (
    <header className="App">
      {props.children || defaultHeaderContent()}
    </header>
  )
}

export default Header;
