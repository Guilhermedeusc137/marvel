import { POINT } from '../actions/ActionTypes'

const initialState = {
  point: 'series'
}

const pointReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case POINT:
      return {
        ...state,
        point: action.point
      }
    default:
      return state
  }
}

export default pointReducer
