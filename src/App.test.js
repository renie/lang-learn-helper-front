import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import renderer from 'react-test-renderer'

const useSelector = fn => {
    fn({wordState: { words: [] }})
}
const useDispatch = () => ({})

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <App 
            useSelectorFn={useSelector}
            useDispatchFn={useDispatch}/>, div)

    ReactDOM.unmountComponentAtNode(div)
});


it('renders correctly', () => {
  const tree = renderer
    .create(<App 
            useSelectorFn={useSelector}
            useDispatchFn={useDispatch}/>)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
