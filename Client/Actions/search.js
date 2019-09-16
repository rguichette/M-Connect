export const ATTEMPT_SEARCH = "ATTEMPT_SEARCH";
export const SEARCH_SUCCESS ="SEARCH_SUCCESS" ;
export const SEARCH_FAIL = "SEARCH_FAIL"

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
