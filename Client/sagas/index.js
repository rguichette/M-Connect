import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SIGN_IN_ATTEMPT, SIGN_OUT_ATTEMPT } from '../Actions'
import { SignIn, SignOut } from './auth'



export function* mainSaga(){
  yield takeEvery(SIGN_IN_ATTEMPT, SignIn),
  yield takeEvery(SIGN_OUT_ATTEMPT, SignOut)
}
