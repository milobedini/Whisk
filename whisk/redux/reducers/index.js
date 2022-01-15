import { combineReducers } from 'redux'

import basketReducer from './basketReducer'

let reducers = combineReducers({
  basketReducer: basketReducer,
})

const rootReducer = (state, action) => {
  return reducers(state, action)
}

export default rootReducer
