
import {initialize,SIGNED_IN,SIGNED_OUT, signInSuccess, signOutSuccess, SIGN_OUT_ATTEMPT, attempSignOut} from '../Actions'


const init = initialize()

export default function authReducer(state=init, action){

console.log("reducer ran");
  switch(action.type){
    case SIGNED_IN:
      console.log("signed in...");
      
        return Object.assign({}, state,signInSuccess()
        )
    case SIGN_OUT_ATTEMPT:
        return Object.assign({}, state,attempSignOut()
        )


    case SIGNED_OUT:
        console.log("signed out");
        
        return Object.assign({}, state,signOutSuccess()
        )

    

default:
    return state;
  }
}
