import { searchSuccess, SEARCH_SUCCESS, FETCH_THEATERS_SUCCESS, fetchTheatersSuccess } from "../Actions";


export default function searchReducer(state={}, action){

    console.log("reducer ran");
      switch(action.type){
        case SEARCH_SUCCESS:
            console.log(action);
            return Object.assign({}, state, searchSuccess(action.searchData)
            )

        case FETCH_THEATERS_SUCCESS:
            console.log("action: ", action);
            return Object.assign({}, state, fetchTheatersSuccess(action.browseData)
            )



    default:
        return state;
      }
    }
