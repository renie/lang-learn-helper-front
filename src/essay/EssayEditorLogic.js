const EssayEditorLogic = ({ words, WordMark, WordMarkBaloon }) => {
    const sendCursorToEnd = (editor, d = document, w = window) => {
        const range = d.createRange()
        range.selectNodeContents(editor)
        range.collapse(false)
        const selection = w.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
        return editor
    }

    const getWordObj = word => 
        words.find(({name}) => name === word)

    const tagWord = (typedWord, reference) => 
        WordMark(typedWord, reference, WordMarkBaloon(reference)) 

    const tryToTagword = word => {
        const wordObj = getWordObj(word.trim())
        if (!wordObj) return word
        return tagWord(word, wordObj)
    }

    const breakTextInWords = text => 
        text.split(' ')

    const putTextTogether = text => 
        text.join(' ')
    
    const getHighlightedText = text => 
        putTextTogether(
            breakTextInWords(text)
                .map(tryToTagword))

    const receiveNewInput = ({nativeEvent}) => {
        const editor = nativeEvent.target
        editor.innerHTML = getHighlightedText(editor.innerText)
        sendCursorToEnd(editor)
        return true
    }

    return {
        sendCursorToEnd,
        getWordObj,
        tagWord,
        tryToTagword,
        breakTextInWords,
        putTextTogether,
        getHighlightedText,
        receiveNewInput
    }
}

export default EssayEditorLogic
