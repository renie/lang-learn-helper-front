import React, { useEffect } from 'react'
import {
    useSelector,
    useDispatch } from 'react-redux'

import './essayEditor.css'

import { getAllWords } from '../word/actions'
import EssayEditorLogic from './EssayEditorLogic'

const EssayEditor = ({
    useEffectFn = useEffect,
    useSelectorFn = useSelector,
    useDispatchFn = useDispatch,
    EssayEditorLogicFn = EssayEditorLogic }) => {
    
    const words = useSelectorFn(store => store.wordState.words)
    const dispatch = useDispatchFn()
    const getAllWordsToDispatch = () => getAllWords()(dispatch)
    let eel = EssayEditorLogicFn({words})

    useEffectFn(()=> {
        getAllWordsToDispatch()
    }, [])
    
    return (
        <div contentEditable="true" className="essayEditor" onInput={eel.receiveNewInput}></div>
    )
}

export default EssayEditor
