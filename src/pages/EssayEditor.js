import React from 'react'

import { EssayEditorComponent } from '../components/essay'
import Layout from '../components/layout/Layout'

const EssayEditor = ({
    useSelector,
    useDispatch,
    useEffect,
    getAllWords,
    saveEssay
}) => {
    
    const words = useSelector(store => store.wordState.words)
    const dispatch = useDispatch()
    const getAllWordsToDispatch = () => getAllWords()(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {getAllWordsToDispatch()}, [])
    
    const save = text => 
        saveEssay(text
                    .split(' ')
                    .map(word => ({
                        "word": word,
                        "wordClass": "not_set",
                        "fixes":[]
                    })))(dispatch)

    return (
        <Layout>
            <EssayEditorComponent words={words} saveEssay={save}/>
        </Layout>
    )
}

export default EssayEditor
