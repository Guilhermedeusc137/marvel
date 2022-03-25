import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from '../rootReducer'
import { logger } from 'redux-logger'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [logger]
const Store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
))

export default Store
