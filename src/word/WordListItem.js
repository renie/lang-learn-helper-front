import React from 'react'

const WordListItem = ({word}) => {
  return (
    <li>
        {word.name}
        <h4>Meanings:</h4>
        {word.meanings.map(meaning => (
            <div key={meaning.id}>
                <strong>{meaning.wordClass}</strong>
                <p>{meaning.description}</p>
                <em>Ex.: {meaning.example}</em>
            </div>
        ))}
    </li>
  )
}

export default WordListItem
