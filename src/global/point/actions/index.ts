import { POINT } from './ActionTypes'

export const point = (value: string) => ({
  type: POINT,
  point: value
})
