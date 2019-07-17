import React from 'react'
import './essayEditor.css'

const EssayEditor = ({
    useEffect,
    useSelector,
    useDispatch,
    createEditorLogic,
    getAllWords,
    saveEssay }) => {
    
    const words = useSelector(store => store.wordState.words)
    const getAllWordsToDispatch = () => getAllWords()(dispatch)
    let editorLogic = createEditorLogic({words})
    useEffect(()=> {getAllWordsToDispatch()}, [])
    const editorRef = React.createRef()
    
    const save = e => {
        const text = editorRef
                        .current
                        .innerText
                        .split(' ')
                        .map(word => ({
                            "word": word,
                            "wordClass": "not_set",
                            "fixes":[]
                        }))
        saveEssay(text)(dispatch)
    }
    
    return (
        <>
            <div className="field">
                <div className="control">
                    <div
                        ref={editorRef}
                        contentEditable="true"
                        className="essayEditor textarea"
                        onInput={editorLogic.receiveNewInput}></div>
                </div>
            </div>
            <button className="button is-primary is-pulled-right save-btn" onClick={save}>Save</button>
        </>
    )
}

export default EssayEditor
