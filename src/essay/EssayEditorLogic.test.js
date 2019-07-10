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

it('tryToTagWord', () => {
    const getWordObj = jest.fn(() => words[0] )
    const getWordObj2 = jest.fn(() => undefined )
    const tagWord = jest.fn()

    logic.tryToTagWord({word: 'used ', getWordObjFn: getWordObj, tagWordFn: tagWord})
    expect(getWordObj).toHaveBeenCalledWith('used')
    expect(tagWord).toHaveBeenCalledWith('used ', words[0])
    expect(logic.tryToTagWord({word: 'nope ', getWordObjFn: getWordObj2})).toBe('nope ')
})

it('getHighlightedText', () => {
    const myText = 'my text'
    const putTextTogether = jest.fn(() => true)
    const breakTextInWords = jest.fn(text => text.split(' '))
    const tryToTagWord = jest.fn()

    const ret = logic.getHighlightedText({text: myText, putTextTogetherFn: putTextTogether, breakTextInWordsFn: breakTextInWords, tryToTagWordFn: tryToTagWord})

    expect(ret).toBe(true)
    expect(putTextTogether).toHaveBeenCalled()
    expect(breakTextInWords).toHaveBeenCalled()
    expect(tryToTagWord).toHaveBeenCalledTimes(2)
})

it('receiveNewInput', () => {
    const nativeEvent = {
        target: {
            innerText: 'my text'
        }
    }
    const getHighlightedText = jest.fn()
    const sendCursorToEnd = jest.fn()

    const ret = logic.receiveNewInput({nativeEvent, getHighlightedTextFn: getHighlightedText, sendCursorToEndFn: sendCursorToEnd})
    expect(ret).toBe(true)
    expect(getHighlightedText).toHaveBeenCalledWith({text: nativeEvent.target.innerText})
    expect(sendCursorToEnd).toHaveBeenCalledWith(nativeEvent.target)
})
