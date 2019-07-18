import React from 'react'

import './style/wordListItem.css'

const WordListItem = ({word={}, MeaningListComponent, key}) => {
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
                    {word.meanings && <MeaningListComponent meanings={word.meanings} />}
                </div>
            </div>
        </li>
    )
}

export default WordListItem
