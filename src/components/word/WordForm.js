import React from 'react'
import './style/wordForm.css'

const BulmaField = ({field}) => {
    switch(field.type) {
    case 'textarea':
        return <textarea id={field.id} className="textarea" ref={field.ref}></textarea>
    case 'select':
        return (
            <div className="select">
                <select ref={field.ref} defaultValue={field.defaultValue}>
                    {field.items.map((item, index) => <option key={index}>{item}</option>)}
                </select>
            </div>)
    case 'text':
    default:
        return <input className="input" type={field.type} id={field.id} ref={field.ref}/>
    }
}

const BulmaFieldWrapper = ({field}) => (
    <div className="field">
        <label htmlFor={field.id} className="label">{field.label}:</label>
        <div className="control">
            <BulmaField field={field}/>
        </div>
    </div>
)


const WordForm = ({ saveWord, wordClasses }) => {
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
                wordClass: wordClassRef.current.value
            }]
        })

    const fields = [{
        id: 'name',
        label: 'Name',
        type: 'text',
        ref: nameRef
    },{
        id: 'meaning1',
        label: 'Meaning',
        type: 'textarea',
        ref: meaningRef
    },{
        id: 'wordClass1',
        label: 'Word Class Name',
        type: 'select',
        ref: wordClassRef,
        items: wordClasses
    },{
        id: 'ecample',
        label: 'Example',
        type: 'text',
        ref: exampleRef
    }]

    return (
        <div className="form">
            {fields.map((field, index) => <BulmaFieldWrapper field={field} key={index}/>)                }
            {/* <div className="field"> */}
            {/*     <label htmlFor="name" className="label">Word:</label> */}
            {/*     <div className="control"> */}
            {/*         <input className="input" type="text" id="name" ref={nameRef}/> */}
            {/*     </div> */}
            {/* </div> */}
            {/* <div className="field"> */}
            {/*     <label htmlFor="meaning1" className="label">Meaning:</label> */}
            {/*     <div className="control"> */}
            {/*         <textarea id="meaning1" className="textarea" ref={meaningRef}></textarea> */}
            {/*     </div> */}
            {/* </div> */}
            {/* <div className="field"> */}
            {/*     <label className="label">Word Class Name:</label> */}
            {/*     <div className="control"> */}
            {/*         <div className="select"> */}
            {/*             <select ref={wordClassRef} defaultValue="not_set"> */}
            {/*                 {wordClasses.map((wordClass, index) => <option key={index}>{wordClass}</option>)} */}
            {/*             </select> */}
            {/*         </div> */}
            {/*     </div> */}
            {/* </div> */}
            {/* <div className="field"> */}
            {/*     <label htmlFor="example" className="label">Example:</label> */}
            {/*     <div className="control"> */}
            {/*         <input className="input" type="text" id="example" ref={exampleRef} /> */}
            {/*     </div> */}
            {/* </div> */}
            <button className="button is-primary is-pulled-right" onClick={save}>Save</button>
        </div>
    )
}
export default WordForm
