
import testActions from '../Actions'

const initialState ={

}


export function testReducers(state, action){
  if (typeof state === 'undefined') {
    return initialState
  }
console.log("reducer ran");
  switch(action.type){
    case testActions.TEST:
    return Object.assign({}, state, {
type:testActions.testfunc()
})
default:
    return state;
  }
}
