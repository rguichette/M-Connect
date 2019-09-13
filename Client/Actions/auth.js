export const SIGNED_IN ="SIGNED_IN";
export const SIGNED_OUT = "SIGNED_OUT";

export const SIGN_IN_ATTEMPT ="SIGN_IN_ATTEMPT";
export const SIGN_OUT_ATTEMPT ="SIGN_OUT_ATTEMPT";

export const SIGN_IN_SUCCESS="SIGNED_IN_SUCCESS";
export const SIGN_OUT_SUCCESS="SIGNED_OUT_SUCCESS"


export const SIGNED_IN_FAIL = "SIGNED_IN_FAIL"


export function initialize(){
    return {
    type:SIGNED_OUT,
    signedIn:false
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









