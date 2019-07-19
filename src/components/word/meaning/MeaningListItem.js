import React from 'react'

const MeaningListItem = ({meaning = {}}) => {
    return (
        <li>
            <strong>{meaning.wordClass}</strong>
            <p>{meaning.description}</p>
            <em>Ex.: {meaning.example}</em>
        </li>
    )
}

export default MeaningListItem
