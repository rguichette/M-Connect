import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ADDED_TO_FAVORITES } from '../Actions'

export function* addToFavorites(){
    console.log("saga ran here for movies");
    
   yield put({type: ADDED_TO_FAVORITES})
}