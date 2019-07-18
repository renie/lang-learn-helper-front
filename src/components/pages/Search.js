import React from 'react'

import Layout from '../layout/Layout'
import { WordListComponent } from '../word'

const Search = ({ 
    useEffect, 
    useSelector, 
    useDispatch, 
    getAllWords
}) => {
    const words = useSelector(store => store.wordState.words)
    const dispatch = useDispatch()
    const getAllWordsToDispatch = () => getAllWords()(dispatch)

    useEffect(()=> {getAllWordsToDispatch()}, [])

    return (
        <Layout>
            <WordListComponent words={words}/>
        </Layout>
    )
} 

export default Search
