import React from 'react'

import WordListItem from './WordListItem'

const WordList = ({words}) => {
  return (
    <ul>
        {words.map((word, index) => <WordListItem key={word._id} word={word}/>)}
    </ul>
  )
}

export default WordList
