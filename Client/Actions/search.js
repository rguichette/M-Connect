//anything "search" related
export const ATTEMPT_SEARCH = "ATTEMPT_SEARCH";
export const SEARCH_SUCCESS ="SEARCH_SUCCESS" ;
export const SEARCH_FAIL = "SEARCH_FAIL"

//anything "explore" related
export const FETCH_THEATERS = "FETCH_THEATERS";
export const FETCH_THEATERS_FAILURE = "FETCH_THEATERS_FAILURE";
export const FETCH_THEATERS_SUCCESS = "FETCH_THEATERS_SUCCESS";

export const FETCH_UPCOMING ="FETCH_UPCOMING";
export const FETCH_UPCOMING_FAILURE ="FETCH_UPCOMING_FAILURE";
export const FETCH_UPCOMING_SUCCESS ="FETCH_UPCOMING_SUCCESS";


export function attemptSearch(text){
    return{
        type:ATTEMPT_SEARCH,
        text
    }
}

export function searchSuccess(searchData){
    return{
        type: SEARCH_SUCCESS,
        searchData
    }
}

export function searchFailed(err){
    return{
        type:SEARCH_FAIL,
        err
    }
}

export function fetchUpcoming(upcomingbrowseData){
    return{
        type:FETCH_UPCOMING,
        upcomingbrowseData
    }
}

export function fetchUpcomingSuccess(upcomingbrowseData){
    return{
        type:FETCH_UPCOMING_SUCCESS,
        upcomingbrowseData
    }
}


 /**attempt browsing
  * @param  {Number} page page for the element
  * defaults to 1
  */
export function fetchTheaters(page=1){

    return{
        type:FETCH_THEATERS,
        page

    }
}


export function fetchTheatersSuccess(theaters_browseData){
    return{
        type:FETCH_THEATERS_SUCCESS,
        theaters_browseData
    }
}
