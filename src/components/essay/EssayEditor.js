import React from 'react'
import './essayEditor.css'

const EssayEditor = ({
    useEffect,
    useSelector,
    useDispatch,
    createEditorLogic,
    getAllWords }) => {
    
    const words = useSelector(store => store.wordState.words)
    const dispatch = useDispatch()
    const getAllWordsToDispatch = () => getAllWords()(dispatch)
    let editorLogic = createEditorLogic({words})

    useEffect(()=> {getAllWordsToDispatch()})
    
    return (
        <div
            contentEditable="true"
            className="essayEditor"
            onInput={editorLogic.receiveNewInput}></div>
    )
}

export default EssayEditor
