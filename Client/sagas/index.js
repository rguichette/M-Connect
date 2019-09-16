import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SIGN_IN_ATTEMPT, SIGN_OUT_ATTEMPT,ADD_TO_FAVORITES, ATTEMPT_SEARCH } from '../Actions'
import { SignIn, SignOut } from './auth'
import { addToFavorites } from './movies'
import { attemptSearch } from './search'



export function* mainSaga(){
  yield takeEvery(SIGN_IN_ATTEMPT, SignIn),
  yield takeEvery(SIGN_OUT_ATTEMPT, SignOut),
yield takeEvery(ADD_TO_FAVORITES, addToFavorites),
yield takeEvery(ATTEMPT_SEARCH, attemptSearch)
}
