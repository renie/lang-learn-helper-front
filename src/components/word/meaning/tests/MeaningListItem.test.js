import React from 'react'
import renderer from 'react-test-renderer'

import MeaningListItem from '../MeaningListItem'

it('renders correctly empty', () => {
    const tree = renderer
        .create(<MeaningListItem
            meaning={undefined}/>)
        .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly not empty', () => {

    const meaning = {
        "id": 1,
        "wordClass": "verb",
        "example": "He used my pen.",
        "description": "Verb use in past tense."
    }

    const tree = renderer
        .create(<MeaningListItem
            meaning={meaning} />)
        .toJSON()

    expect(tree).toMatchSnapshot()
})
