import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {signInSuccess} from '../Actions';

export function* SignIn(action) {
    console.log("signed in...testing fake");
    //assuming everything goes well
yield put(signInSuccess())
 }