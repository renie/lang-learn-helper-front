import { GET_ALL_WORDS, SAVE_WORD } from './actionTypes'

const initialState = {
  words: []
}

const wordReducer = (state = initialState, action) => {
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


export default wordReducer
