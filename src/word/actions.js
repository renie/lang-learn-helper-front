import { GET_ALL_WORDS } from '../word/actionTypes';

const getWords = words => ({
  type: GET_ALL_WORDS,
  words
})


export const getAllWords = (fetchFn = fetch) => 
    dispatch => 
        fetchFn('http://localhost:3030/word')
            .then(data => data.json())
            .then(words => dispatch(getWords(words)))
