import React from 'react'

import './wordList.css'

const WordList = ({words, WordListItemComponent}) => {
    return (
        <ul className="mansory">
            {(words && words.length)
                ? words.map((word, index) => <WordListItemComponent key={word._id}  word={word}/>)
                : <li>No words do be listed</li>}
        </ul>
    )
}

export default WordList
