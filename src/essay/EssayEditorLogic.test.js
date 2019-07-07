import EssayEditorLogic from './EssayEditorLogic'

const logic = EssayEditorLogic([{
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
                }])

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
