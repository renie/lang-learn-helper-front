import React from 'react'
import Header from './Header'

import 'bulma/css/bulma.min.css'

const Layout = ({children}) => (
    <main className="app container">
        <Header />
        {children}
    </main>
)

export default Layout
