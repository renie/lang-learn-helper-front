import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import MeaningList from './MeaningList'

const MeaningListItem = ({meaning}) => `${meaning.id} - ${meaning.wordClass}`

it('renders correctly empty', () => {
    const tree = renderer
                    .create(<MeaningList 
                                meanings={undefined}
                                MeaningListItem={MeaningListItem}/>)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly empty', () => {
    const tree = renderer
                    .create(<MeaningList 
                                meanings={[]}
                                MeaningListItem={MeaningListItem}/>)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly not empty', () => {
 
    const meanings = [{
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
    }]

    const tree = renderer
                    .create(<MeaningList 
                                meanings={meanings}
                                MeaningListItem={MeaningListItem}/>)
                    .toJSON()

  expect(tree).toMatchSnapshot()
})
