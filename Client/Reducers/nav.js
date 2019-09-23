import { nextPage, NEXT_PAGE } from "../Actions";


export default function navReducer(state={}, action){

    console.log("reducer ran");
      switch(action.type){
        case  NEXT_PAGE:
            console.log(action);
            return Object.assign({}, state, nextPage(action.pageUpdateBy)
            )

       
          
        
    
    default:
        return state;
      }
    }