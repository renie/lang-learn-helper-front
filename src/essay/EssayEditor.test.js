import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import EssayEditor from './EssayEditor'

const useSelector = fn => {
    fn({wordState: { words: [] }})
}
const useDispatch = () => ({})
const useEffect = () => ({})
const getAllWords = () => _ => ([])
const createEditorLogic = _ => ({receiveNewInput:()=>{}})


it('renders correctly', () => {
  const tree = renderer
    .create(
        <EssayEditor 
            useEffect={useEffect} 
            useSelector={useSelector}
            useDispatch={useDispatch}
            getAllWords={getAllWords} 
            createEditorLogic={createEditorLogic}/>)
    .toJSON()

  expect(tree).toMatchSnapshot()
});
