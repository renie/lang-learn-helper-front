import React from 'react'

import { WordFormComponent } from '../components/word'
import Layout from '../components/layout/Layout'

const WordEdit = ({
    useEffect,
    useSelector, 
    useDispatch, 
    saveWord,
    getWordClasses 
}) => {

    const classes = useSelector(store=> store.wordState.wordClasses)
    const dispatch = useDispatch()
    const save = word => saveWord(word)(dispatch)
    const getWordClassesToDispatch = () => getWordClasses()(dispatch)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {getWordClassesToDispatch()}, [])

    return (
        <Layout>
            <WordFormComponent saveWord={save} wordClasses={classes}/>
        </Layout>
    )
}
 
export default WordEdit
