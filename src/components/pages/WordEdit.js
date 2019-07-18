import React from 'react'

import { WordFormComponent } from '../word'
import Layout from '../layout/Layout'

const WordEdit = ({ 
    useDispatch, 
    saveWord 
}) => {

    const dispatch = useDispatch()
    const save = word => saveWord(word)(dispatch)

    return (
        <Layout>
            <WordFormComponent saveWord={save}/>
        </Layout>
    )
}
 
export default WordEdit
