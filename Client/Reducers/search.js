import { searchSuccess, SEARCH_SUCCESS } from "../Actions";


export default function searchReducer(state={}, action){

    console.log("reducer ran");
      switch(action.type){
        case SEARCH_SUCCESS:
            console.log(action);
            return Object.assign({}, state, searchSuccess(action.searchData)
            )

            
          
        
    
    default:
        return state;
      }
    }