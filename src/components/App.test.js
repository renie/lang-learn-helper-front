import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { App } from './App'

const useSelector = fn => {
    fn({wordState: { words: [] }})
}
const useDispatch = () => ({})
const useEffect = () => ({})
const getAllWords = () => _ => ([])

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <App
            useEffect={useEffect} 
            useSelector={useSelector}
            useDispatch={useDispatch}
            getAllWords={getAllWords} />, div)

    ReactDOM.unmountComponentAtNode(div)
});


it('renders correctly', () => {
  const tree = renderer
    .create(
        <App 
            useEffect={useEffect} 
            useSelector={useSelector}
            useDispatch={useDispatch}
            getAllWords={getAllWords} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
