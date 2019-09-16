import { ADD_TO_FAVORITES, addToFavorites, ADDED_TO_FAVORITES, addedToFavorites } from "../Actions";


export default function moviesReducer(state={}, action){

    console.log("reducer ran");
      switch(action.type){
        case ADD_TO_FAVORITES:
            // console.log("added for sure");
            return Object.assign({}, state, addToFavorites()
            )
        case ADDED_TO_FAVORITES:
                console.log("added for sure");
                return Object.assign({}, state, addedToFavorites()
                )    
            
          
        
    
    default:
        return state;
      }
    }