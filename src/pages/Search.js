import React from 'react'

import Layout from '../components/layout/Layout'
import { WordListComponent } from '../components/word'

const Search = ({ 
    useEffect, 
    useSelector, 
    useDispatch, 
    getAllWords
}) => {
    const words = useSelector(store => store.wordState.words)
    const dispatch = useDispatch()
    const getAllWordsToDispatch = () => getAllWords()(dispatch)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=> {getAllWordsToDispatch()}, [])

    return (
        <Layout>
            <WordListComponent words={words}/>
        </Layout>
    )
} 

export default Search
