import EssayEditorLogic from './EssayEditorLogic'

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

const baloon = {id: 'baloon'}
const WordMarkBaloon = jest.fn(() => baloon)
const WordMark = jest.fn()

const logic = EssayEditorLogic({words, WordMark, WordMarkBaloon})


it('sendCursorToEnd', () => {
    const editor = { name:'editor' }

    const range = {
        selectNodeContents: jest.fn(),
        collapse: jest.fn()
    }
    
    const selection = {
        removeAllRanges: jest.fn(),
        addRange: jest.fn()
    }

    const doc = { createRange: () => range }
    
    const win = { getSelection : () => selection }

    const newEditor = logic.sendCursorToEnd(editor, doc, win)

    expect(newEditor).toBe(editor)
    expect(range.selectNodeContents).toHaveBeenCalledWith(editor)
    expect(range.collapse).toHaveBeenCalledWith(false)
    expect(selection.removeAllRanges).toHaveBeenCalled()
    expect(selection.addRange).toHaveBeenCalledWith(range)
})

it('getWordObj', () => {
    expect(logic.getWordObj('used')).toBe(words[0])
    expect(logic.getWordObj('nope')).toBe(undefined)
})

it('tagWord', () => {
    logic.tagWord('used', words[0])
    expect(WordMarkBaloon).toHaveBeenCalledWith(words[0])
    expect(WordMark).toHaveBeenCalledWith('used', words[0], baloon)
})

it('breakTextInWords', () => {
    expect(logic.breakTextInWords('not used')).toStrictEqual(['not', 'used'])
})

it('putTextTogether', () => {
    expect(logic.putTextTogether(['not', 'used'])).toStrictEqual('not used')
})
