import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../Menu'

it('renders correctly no option', () => {
    const tree = renderer
        .create(<Router><Menu /></Router>)
        .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly no option', () => {
    const tree = renderer
        .create(<Router><Menu route='/editor' /></Router>)
        .toJSON()

    expect(tree).toMatchSnapshot()
})
