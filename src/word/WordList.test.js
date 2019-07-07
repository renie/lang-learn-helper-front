import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import WordList from './WordList'

const WordListItem = ({word}) => `${word.name} - ${word.meanings[0].wordClass}`

it('renders correctly empty', () => {
    const tree = renderer
                    .create(<WordList 
                                words={undefined}
                                WordListItem={WordListItem}/>)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly empty', () => {
    const tree = renderer
                    .create(<WordList 
                                words={[]}
                                WordListItem={WordListItem}/>)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly not empty', () => {
 
    const words = [{
            "name":"used",
            "meanings":[{
                "id": 1,
                "wordClass": "verb",
                "example": "He used my pen.",
                "description": "Verb use in past tense."
            },
            {
                "id":2,
                "wordClass":"adjective",
                "example":"My pen is used.",
                "description":"Means the object is not new anymore."
        }],
        "_id":"BcNdVZy038MWxqrg"
    }]

    const tree = renderer
                    .create(<WordList 
                                words={words}
                                WordListItem={WordListItem}/>)
                    .toJSON()

  expect(tree).toMatchSnapshot()
})
