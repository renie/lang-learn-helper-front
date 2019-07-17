import { SAVE_ESSAY } from './actionTypes';

export const getSaveEssayCreator = essay => ({
  type: SAVE_ESSAY,
  essay
})


export const saveEssay = (essay, fetchFn = fetch) => 
    dispatch => 
        fetchFn('http://localhost:3030/essay', {
              method: 'POST',
              body: JSON.stringify(essay),
              headers:{
                'Content-Type': 'application/json'
              }
            })
            .then(data => data.json())
            .then(essay => dispatch(getSaveEssayCreator(essay)))
