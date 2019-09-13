
import {initialize,SIGNED_IN,SIGNED_OUT} from '../Actions'




export default function authReducer(state, action){
  if (typeof state === 'undefined') {
    return initialize()
  }
console.log("reducer ran");
  switch(action.type){


default:
    return state;
  }
}
