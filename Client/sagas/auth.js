import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {signInSuccess, signOutSuccess} from '../Actions';

export function* SignIn(action) {
    // console.log("signed in...testing fake");
    //assuming everything goes well
yield put(signInSuccess())
 }


 export function* SignOut(action){
    // console.log("signed out...testing fake");

    yield put(signOutSuccess())
 }