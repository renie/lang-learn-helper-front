import React from 'react'

import './wordList.css'

const WordList = ({words, WordListItem}) => {
    return (
        <ul className="mansory">
            {(words && words.length)
                ? words.map((word, index) => <WordListItem key={word._id} word={word}/>)
                : <li>No words do be listed</li>}
        </ul>
    )
}

export default WordList
