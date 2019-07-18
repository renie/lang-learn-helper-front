import { combineReducers } from 'redux'
import { wordReducer } from '../store/ducks/word'
import { essayReducer } from '../store/ducks/essay'

export const Reducers = combineReducers({
  wordState: wordReducer,
  essayState: essayReducer,
})
