import React from 'react'

import WordListItem from './WordListItem'

import './wordList.css'

const WordList = ({words}) => {
  return (
    <ul className="mansory">
        {words.map((word, index) => <WordListItem key={word._id} word={word}/>)}
    </ul>
  )
}

export default WordList
