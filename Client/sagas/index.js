import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SIGN_IN_ATTEMPT, SIGN_OUT_ATTEMPT,ADD_TO_FAVORITES, ATTEMPT_SEARCH, FETCH_THEATERS, FETCH_UPCOMING } from '../Actions'
import { SignIn, SignOut } from './auth'
import { addToFavorites } from './movies'
import { attemptSearch, attemptIn_Theaters, attemptComing_Soon } from './search'



export function* mainSaga(){
  yield takeEvery(SIGN_IN_ATTEMPT, SignIn),
  yield takeEvery(SIGN_OUT_ATTEMPT, SignOut),
yield takeEvery(ADD_TO_FAVORITES, addToFavorites),
yield takeEvery(ATTEMPT_SEARCH, attemptSearch),
yield takeEvery(FETCH_THEATERS, attemptIn_Theaters),
yield takeEvery(FETCH_UPCOMING, attemptComing_Soon)

}
