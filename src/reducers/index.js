import { combineReducers } from 'redux'
import wordReducer from '../components/word/reducer'

export const Reducers = combineReducers({
  wordState: wordReducer,
})
