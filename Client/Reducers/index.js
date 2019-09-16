import { combineReducers } from 'redux'

import authReducer from './auth'
import moviesReducer from './movies'
import searchReducer from './search'
export default combineReducers({authReducer, moviesReducer, searchReducer })
