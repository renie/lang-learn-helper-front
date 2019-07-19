// types
export const GET_ALL_WORDS = 'GET_ALL_WORDS'
export const SAVE_WORD = 'SAVE_WORD'
export const GET_WORD_CLASSES = 'GET_WORD_CLASSES'

// action creators
export const getWordsCreator = words => ({
    type: GET_ALL_WORDS,
    words
})

export const saveWordCreator = word => ({
    type: SAVE_WORD,
    word
})

export const getWordClassesCreator = wordClasses => ({
    type: GET_WORD_CLASSES,
    wordClasses
})

// actions
export const getAllWords = (fetchFn = fetch) => 
    dispatch => 
        fetchFn('http://localhost:3030/word')
            .then(data => data.json())
            .then(words => dispatch(getWordsCreator(words)))

export const saveWord = (word, fetchFn = fetch) => 
    dispatch => 
        fetchFn('http://localhost:3030/word', {
            method: 'POST',
            body: JSON.stringify(word),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(word => dispatch(saveWordCreator(word)))

export const getWordClasses = (fetchFn = fetch) => 
    dispatch => 
        fetchFn('http://localhost:3030/available-word-classes')
            .then(data => data.json())
            .then(words => dispatch(getWordClassesCreator(words)))

// reducer
const initialState = {
    words: [],
    wordClasses: []
}

export const wordReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_ALL_WORDS:
        return {
            ...state,
            words: action.words
        }
    case SAVE_WORD:
        return {
            ...state,
            words: [...state.words, action.word]
        }
    case GET_WORD_CLASSES:
        return {
            ...state,
            wordClasses: action.wordClasses
        }
    default:
        return state
    }
}
