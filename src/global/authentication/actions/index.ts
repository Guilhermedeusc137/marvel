import { IS_AUTHENTICATED } from './ActionTypes'

export const isAuthenticated = (value: boolean) => ({
  type: IS_AUTHENTICATED,
  isAuthenticated: value
})
