import { combineReducers } from 'redux'
import wordReducer from '../word/reducer'

export const Reducers = combineReducers({
  wordState: wordReducer,
})
