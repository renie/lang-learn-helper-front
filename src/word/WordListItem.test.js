import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import WordListItem from './WordListItem'

const MeaningList = ({meanings}) => `${meanings[0].wordClass} - ${meanings[0].id}`

it('renders correctly empty', () => {
    const tree = renderer
                    .create(<WordListItem 
                                word={undefined}
                                MeaningListComponent={MeaningList}/>)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly not empty', () => {
 
    const word = {
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
    }

    const tree = renderer
                    .create(<WordListItem
                                word={word}
                                MeaningListComponent={MeaningList}/>)
                    .toJSON()

  expect(tree).toMatchSnapshot()
})
