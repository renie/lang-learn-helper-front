import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { getAllWords } from './actions';
import { connect } from 'react-redux'
import './App.css'
import 'bulma/css/bulma.min.css'

import Header from './layout/Header'
import WordList from './word/WordList'


export const App = ({words, getAllWords, useEffectFn = useEffect}) => {
  useEffectFn(()=> {
    getAllWords()
  }, [getAllWords])

  return (
    <main className="app container">
      <Header />
      <WordList words={words}/>
    </main>
  )
} 

const mapStateToProps = store => ({
  words: store.wordState.words
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAllWords }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(App)

