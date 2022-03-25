import { IS_AUTHENTICATED } from '../actions/ActionTypes'

const initialState = {
  isAuthenticated: false
}

const authenticationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }
    default:
      return state
  }
}

export default authenticationReducer
