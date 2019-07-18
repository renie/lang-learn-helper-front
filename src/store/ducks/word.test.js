import assert from 'assert'
import { GET_ALL_WORDS, getAllWords } from '../../store/ducks/word'

it('should call fetch and call dispatch', async(done, fail) => {
    const fetchReturn = {
        json: () => [{
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
            }]
        }]
    }

    const fetch = _ => 
        Promise.resolve(fetchReturn)

    let receivedObject
    const dispatch = obj => (receivedObject = obj)

    await getAllWords(fetch)(dispatch).catch(fail)
    assert.equal(receivedObject.type, GET_ALL_WORDS)
    assert.deepStrictEqual(receivedObject.words, fetchReturn.json())
    done()
        
})
