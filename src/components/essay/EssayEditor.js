import React from 'react'
import './essayEditor.css'

const EssayEditor = ({
    createEditorLogic,
    words,
    saveEssay 
}) => {
    
    let editorLogic = createEditorLogic({words})
    const editorRef = React.createRef()
    
    const saveHandler = _ => saveEssay(editorRef.current.innerText)
    
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
            <button className="button is-primary is-pulled-right save-btn" onClick={saveHandler}>Save</button>
        </>
    )
}

export default EssayEditor
