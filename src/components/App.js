import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'
import 'bulma/css/bulma.min.css'

import { getAllWords } from '../actions'
import Header from './layout/Header'
import { WordListComponent } from './word'


export const App = ({ useEffect, useSelector, useDispatch, getAllWords}) => {
    const words = useSelector(store => store.wordState.words)
    const dispatch = useDispatch()
    const getAllWordsToDispatch = () => getAllWords()(dispatch)

    useEffect(()=> {getAllWordsToDispatch()})

    return (
        <main className="app container">
            <Header />
            <WordListComponent words={words}/>
        </main>
    )
} 


export const AppComponent = () => 
    App({useEffect, useSelector, useDispatch, getAllWords})


