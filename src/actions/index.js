import { GET_ALL_WORDS } from './actionTypes';

const getWords = words => ({
  type: GET_ALL_WORDS,
  words
})


export const getAllWords = () => 
    dispatch => { 
        fetch('http://localhost:3030/word')
            .then(data => data.json())
            .then(words => dispatch(getWords(words)))
    }
