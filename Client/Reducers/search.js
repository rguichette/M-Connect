import { searchSuccess, SEARCH_SUCCESS, FETCH_THEATERS_SUCCESS, fetchTheatersSuccess, fetchUpcomingSuccess, FETCH_UPCOMING_SUCCESS } from "../Actions";


export default function searchReducer(state={}, action){

    console.log("reducer ran");
      switch(action.type){
        case SEARCH_SUCCESS:
            console.log(action);
            return Object.assign({}, state, searchSuccess(action.searchData)
            )

        case FETCH_THEATERS_SUCCESS:
            console.log("action: ", action);
            return Object.assign({}, state, fetchTheatersSuccess(action.theaters_browseData)
            )
        case FETCH_UPCOMING_SUCCESS:
            console.log("action: ", action);
            return Object.assign({}, state, fetchUpcomingSuccess(action.upcomingbrowseData)
            )


    default:
        return state;
      }
    }
