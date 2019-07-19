import { combineReducers } from 'redux'
import { wordReducer } from '../ducks/word'
import { essayReducer } from '../ducks/essay'

export const Reducers = combineReducers({
    wordState: wordReducer,
    essayState: essayReducer
})
