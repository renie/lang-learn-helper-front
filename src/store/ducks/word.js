// types
export const GET_ALL_WORDS = 'GET_ALL_WORDS'
export const SAVE_WORD = 'SAVE_WORD'

// action creators
export const getWordsCreator = words => ({
  type: GET_ALL_WORDS,
  words
})

export const saveWordCreator = word => ({
  type: SAVE_WORD,
  word
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


// reducer
const initialState = {
  words: []
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
    default:
      return state
  }
}
