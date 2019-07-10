import { GET_ALL_WORDS } from './actionTypes'

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
    default:
      return state
  }
}


export default wordReducer
