import { GET_ALL_WORDS, SAVE_WORD } from './actionTypes';

export const getWordsCreator = words => ({
  type: GET_ALL_WORDS,
  words
})

export const saveWordCreator = word => ({
  type: SAVE_WORD,
  word
})

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
