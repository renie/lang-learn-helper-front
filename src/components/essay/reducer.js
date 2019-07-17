import { SAVE_ESSAY } from './actionTypes'

const initialState = {
  essays: [],
  essay: {}
}

const essayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ESSAY:
      return {
        ...state,
        essay: action.essay
        essays: [...state.essays, action.essay]
      }
    default:
      return state
  }
}


export default essayReducer
