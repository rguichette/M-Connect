import { combineReducers } from 'redux'

import authReducer from './auth'
import moviesReducer from './movies'
import searchReducer from './search'
import navReducer from './nav'
export default combineReducers({authReducer, moviesReducer, searchReducer , navReducer })
