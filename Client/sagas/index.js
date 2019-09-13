import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SIGN_IN_ATTEMPT } from '../Actions'
import { SignIn } from './auth'



export function* mainSaga(){
  yield takeEvery(SIGN_IN_ATTEMPT, SignIn)
}
