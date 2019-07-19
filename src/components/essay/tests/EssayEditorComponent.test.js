import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'

import { EssayEditorComponent } from '../'

const mockStore = configureMockStore()
const words = [{
    "name": "used",
    "meanings": [
        {
            "id": 1,
            "wordClass": "verb",
            "example": "He used my pen.",
            "description": "Verb use in past tense."
        },
        {
            "id": 2,
            "wordClass": "adjective",
            "example": "My pen is used.",
            "description": "Means the object is not new anymore."
        }
    ],
    "_id": "BcNdVZy038MWxqrg"
},
{
    "name": "egg",
    "meanings": [
        {
            "id": 1,
            "wordClass": "verb",
            "example": "Encourage someone to do something.",
            "description": "His brother egg him."
        },
        {
            "id": 2,
            "wordClass": "noun",
            "example": "The fish is lay eggs on the lake",
            "description": "an oval or round object laid by some female animals."
        }
    ],
    "_id": "UJdUhQDpTf1kLk1r"
},
{
    "name": "cross",
    "meanings": [
        {
            "id": 1,
            "wordClass": "noun",
            "example": "The constellation Southern Cross",
            "description": "a mark, object, or figure formed by two short intersecting lines or pieces (+ or ×)"
        },
        {
            "id": 2,
            "wordClass": "verb",
            "example": "The two lines cross at 90°",
            "description": "Pass in an opposite or different direction"
        },
        {
            "id": 3,
            "wordClass": "adjective",
            "example": "He seemed to be very cross about something",
            "description": "Annoyed"
        }
    ],
    "_id": "WUz0RaHlDr9tujkD"
},
{
    "name": "classified",
    "meanings": [
        {
            "id": 1,
            "wordClass": "adjective",
            "example": "This pen is classified among blue ones.",
            "description": "Verb classify in past tense."
        },
        {
            "id": 2,
            "wordClass": "noun",
            "example": "He is reading the classified.",
            "description": "Small advertisements placed in a newspaper and organized in categories.."
        }
    ],
    "_id": "xv2fBIl3y3FNyKrP"
}]

const store = mockStore({wordState:{words}})

it('Marks words', () => {

    const component = render(
        <Provider store={store}>
            <EssayEditorComponent words={words}/>
        </Provider> )

    const editor = component.container.querySelector('.essayEditor')
    editor.innerText = 'I have a used and classified hat.'
    fireEvent.input(editor)
    expect(editor.innerHTML).toMatchSnapshot()
})
