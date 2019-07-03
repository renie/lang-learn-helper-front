import React from 'react'

import './essayEditor.css'

import EssayEditorLogic from './EssayEditorLogic'

const EssayEditor = () => {
    const eel = EssayEditorLogic([{
        "name": "used",
        "meanings": [{
            "id": 1,
            "wordClass": "verb",
            "example": "He used my pen.",
            "description": "Verb use in past tense."
        },
        {
            "id": 2,
            "wordClass": "adjective",
            "example": "My pen is used.",
            "description": "Means the object is not new anymore."
        }] 
    }])
    
    return (
        <div contentEditable="true" className="essayEditor" onInput={eel.receiveNewInput}></div>
    )
}

export default EssayEditor
