import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Menu from './Menu'

it('renders correctly no option', () => {
    const tree = renderer
                    .create(<Menu />)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly no option', () => {
    const tree = renderer
                    .create(<Menu route='/editor' />)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})
