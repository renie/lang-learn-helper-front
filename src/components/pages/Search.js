import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { WordListComponent } from '../word'
import Layout from '../layout/Layout'
import { getAllWords } from '../../actions'

export const Search = ({ useEffect, useSelector, useDispatch, getAllWords}) => {
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


export const SearchPage = () => 
    Search({useEffect, useSelector, useDispatch, getAllWords})
