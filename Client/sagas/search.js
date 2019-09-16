import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { searchSuccess } from '../Actions'



export function* attemptSearch(action){
    console.log("search performed");
    //todo: get input from action 
yield put(searchSuccess("fake data"))
}