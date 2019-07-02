import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
    const useSelector = fn => fn({wordState: { words: [] }})
    const useDispatch = () => ({})

    const div = document.createElement('div')
    ReactDOM.render(<App useSelectorFn={useSelector} useDispatchFn={useDispatch}/>, div)
    ReactDOM.unmountComponentAtNode(div)
});
