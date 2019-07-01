import React from 'react'

import MeaningList from '../meaning/MeaningList'
import './wordListItem.css'

const WordListItem = ({word}) => {
  return (
    <li className="card wordListItem">
        <header className="card-header">
            <p className="title">
                {word.name}
            </p>
        </header>
        <div className="card-content">
            <div className="content">
                <p className="subtitle">Meanings:</p>
                <MeaningList meanings={word.meanings} />
            </div>
        </div>
    </li>
  )
}

export default WordListItem
