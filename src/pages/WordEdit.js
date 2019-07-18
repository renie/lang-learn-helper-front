import React from 'react'

import { WordFormComponent } from '../components/word'
import Layout from '../components/layout/Layout'

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
