// types
const SAVE_ESSAY = 'SAVE_ESSAY'

// action creators
export const getSaveEssayCreator = essay => ({
  type: SAVE_ESSAY,
  essay
})


// actions
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

// reducer
const initialState = {
  essays: [],
  essay: {}
}

export const essayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ESSAY:
      return {
        ...state,
        essay: action.essay,
        essays: [...state.essays, action.essay]
      }
    default:
      return state
  }
}

