import React, { useEffect } from 'react'
import { getAllWords } from './actions';
import { 
  useSelector, 
  useDispatch } from 'react-redux'

import './App.css'
import 'bulma/css/bulma.min.css'

import Header from './layout/Header'
import WordList from './word/WordList'


const App = ({
  useEffectFn = useEffect,
  useSelectorFn = useSelector,
  useDispatchFn = useDispatch}) => {

  const words = useSelectorFn(store => store.wordState.words)
  const dispatch = useDispatchFn()
  const getAllWordsToDispatch = () => getAllWords()(dispatch)

  useEffectFn(()=> getAllWordsToDispatch(), [])

  return (
    <main className="app container">
      <Header />
      <WordList words={words}/>
    </main>
  )
} 

export default App
