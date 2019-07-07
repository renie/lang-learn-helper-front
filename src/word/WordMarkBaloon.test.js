import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import WordMarkBaloon from './WordMarkBaloon'

it('renders correctly', () =>{
    const tree = WordMarkBaloon({
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
        })

    expect(tree).toMatchSnapshot()
})
