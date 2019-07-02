import React from 'react'
import ReactDOM from 'react-dom'
import WordList from './WordList'
import renderer from 'react-test-renderer'


it('renders correctly empty', () => {
    const tree = renderer
                    .create(<WordList 
                                words={undefined}/>)
                    .toJSON()

    expect(tree).toMatchSnapshot()
})

it('renders correctly empty', () => {
    const tree = renderer
                    .create(<WordList 
                                words={[]}/>)
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
                                words={words}/>)
                    .toJSON()

  expect(tree).toMatchSnapshot()
})
