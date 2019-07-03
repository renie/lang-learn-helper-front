
const sendCursorToEnd = (editor, d = document, w = window) => {
    const range = document.createRange()
    range.selectNodeContents(editor)
    range.collapse(false)
    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    return editor
}

const EssayEditorLogic = words => {

    const getWordObj = word => words.find(({name}) => name === word)

    const tagWord = (word, reference) => 
        `<span class="${reference.meanings[0].wordClass}">${word}</span>`

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
        editor.innerHTML = getHighlightedText(editor.textContent)
        sendCursorToEnd(editor)
        return true
    }

    return {
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
