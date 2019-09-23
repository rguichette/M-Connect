import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { searchSuccesss, fetchTheatersSuccess, fetchUpcomingSuccess} from '../Actions'

const axios = require('axios');

import { API_KEY, BASE_URL } from '../shared_files/apiDetails';

let pageNumber = null;

export function* attemptSearch(action){
    console.log("search performed");
    //todo: get input from action
yield put(searchSuccess("fake data"))
}

export async function attemptIn_TheatersHelper(section, sub_section){
  //run edit for the {} from params here
  let url_ = `${BASE_URL}${"movie"}/now_playing?api_key=${API_KEY}`

  return await axios.get(url_).then(res =>{


    console.log("res: ",res.data.results);
    return res.data.results
  }).catch(err =>{
    console.log("res ",err);
  })
}

export function* attemptIn_Theaters(action){
    console.log("action is ", action.page);
    //request to browsing api endpoint here


    //TODO: attempt search here:
    pageNumber = action.page;

      // console.log("res trying, ", url_);
let searchData = yield attemptIn_TheatersHelper()

console.log("url is ", searchData);

    yield put(fetchTheatersSuccess(searchData));
}


/////////////



export async function attemptComing_SoonHelper(section, sub_section){
    //run edit for the {} from params here
    let url_ = `${BASE_URL}${"movie"}/upcoming?api_key=${API_KEY}`

    return await axios.get(url_).then(res =>{


      console.log("res: ",res.data.results);
      return res.data.results
    }).catch(err =>{
      console.log("res ",err);
    })
  }


export function* attemptComing_Soon(action){
    console.log("action is ", action.page);
    //request to browsing api endpoint here


    //TODO: attempt search here:
    // pageNumber = action.page;

      // console.log("res trying, ", url_);
let searchData = yield attemptComing_SoonHelper()

console.log("url is-- ", searchData);

    yield put(fetchUpcomingSuccess(searchData));
}
