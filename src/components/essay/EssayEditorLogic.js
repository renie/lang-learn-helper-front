const EssayEditorLogic = ({ words, WordMark, WordMarkBaloon }) => {
    const sendCursorToEnd = (editor, d = document, w = window) => {
        if(!d.createRange) return false
        
        const range = d.createRange()
        range.selectNodeContents(editor)
        range.collapse(false)
        const selection = w.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        return editor
    }

    const getWordObj = word => 
        words.find(({name}) => name.toLowerCase() === word.toLowerCase())

    const tagWord = (typedWord, reference) => 
        WordMark(typedWord, reference, WordMarkBaloon(reference)) 

    const tryToTagWord = ({word, getWordObjFn = getWordObj, tagWordFn = tagWord}) => {
        const wordObj = getWordObjFn(word.trim())
        if (!wordObj) return word
        return tagWordFn(word, wordObj)
    }

    const breakTextInWords = text => 
        text.split(' ')

    const putTextTogether = text => 
        text.join(' ')
    
    const getHighlightedText = ({text, putTextTogetherFn = putTextTogether, breakTextInWordsFn = breakTextInWords, tryToTagWordFn = tryToTagWord}) => 
        putTextTogetherFn(
            breakTextInWordsFn(text)
                .map(word => tryToTagWordFn({word})))

    const receiveNewInput = ({ nativeEvent, getHighlightedTextFn = getHighlightedText, sendCursorToEndFn = sendCursorToEnd}) => {
        const editor = nativeEvent.target
        editor.innerHTML = getHighlightedTextFn({text: editor.innerText})
        sendCursorToEndFn(editor)
        return true
    }

    return {
        sendCursorToEnd,
        getWordObj,
        tagWord,
        tryToTagWord,
        breakTextInWords,
        putTextTogether,
        getHighlightedText,
        receiveNewInput
    }
}

export default EssayEditorLogic
