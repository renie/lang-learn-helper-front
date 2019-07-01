import { combineReducers } from 'redux'
import wordReducer from './wordReducer'

export const Reducers = combineReducers({
  wordState: wordReducer,
})
