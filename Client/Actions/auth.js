export const SIGNED_IN ="SIGNED_IN";
export const SIGNED_OUT = "SIGNED_OUT";

export const SIGN_IN_ATTEMPT ="SIGN_IN_ATTEMPT";
export const SIGN_OUT_ATTEMPT ="SIGN_OUT_ATTEMPT";

export const SIGN_IN_SUCCESS="SIGNED_IN_SUCCESS";
export const SIGN_OUT_SUCCESS="SIGNED_OUT_SUCCESS"


export const SIGNED_IN_FAIL = "SIGNED_IN_FAIL"
//strict
export const REQUEST_SIGN_IN ="REQUEST_SIGN_IN"

export function initialize(){
    return {
    type:SIGNED_OUT,
    signedIn:false
}
}
//this is to detect if the right "sign in " button was clicked
export function requestSignIn_btn(){
return{
    type:REQUEST_SIGN_IN
}
}

export function attemptSignIn(){
    return{
        type:SIGN_IN_ATTEMPT,

    }
}

export function attempSignOut(){
    return{
        type:SIGN_OUT_ATTEMPT
    }
}


export function signInSuccess(){
    return{
        type:SIGNED_IN,
        signedIn:true
    }
}

export function signOutSuccess(){
    return{
        type:SIGNED_OUT,
        signedIn:false

    }
}









