import React from 'react'
import './style/wordForm.css'

const WordForm = ({ saveWord }) => {
    const nameRef = React.createRef()
    const meaningRef = React.createRef()
    const wordClassRef = React.createRef()
    const exampleRef = React.createRef()

    const save = _ => 
        saveWord({
            name: nameRef.current.value,
            meanings: [{
                id: 0,
                description: meaningRef.current.value,
                example: exampleRef.current.value,
                wordClass: wordClassRef.current.value,
            }]
        })

    return (
        <div>
            <div className="field">
                <label htmlFor="name" className="label">Word:</label>
                <div className="control">
                    <input className="input" type="text" id="name" ref={nameRef}/>
                </div>
            </div>
            <div className="field">
                <label htmlFor="meaning1" className="label">Meaning:</label>
                <div className="control">
                    <textarea id="meaning1" className="textarea" ref={meaningRef}></textarea>
                </div>
            </div>
            <div className="field">
                <label className="label">Word Class Name:</label>
                <div className="control">
                    <div className="select">
                        <select ref={wordClassRef}>
                            <option default>not_set</option>
                            <option>noun</option> 
                            <option>verb</option> 
                            <option>adjective</option> 
                            <option>adverb</option> 
                            <option>pronoun</option> 
                            <option>preposition</option> 
                            <option>conjunction</option> 
                            <option>interjection</option>
                            <option>numeral</option>
                            <option>article</option>
                            <option>determiner</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label htmlFor="example" className="label">Example:</label>
                <div className="control">
                    <input className="input" type="text" id="example" ref={exampleRef} />
                </div>
            </div>
            <button className="button is-primary is-pulled-right" onClick={save}>Save</button>
        </div>
    )
}
export default WordForm
