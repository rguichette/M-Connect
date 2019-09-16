export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

export const ADDED_TO_FAVORITES = "ADDED_TO_FAVORITES"

export function addToFavorites(){
return {
    type:ADD_TO_FAVORITES 
}

}

export function addedToFavorites(){
    console.log("aaaaadded");
    
    return {
        type:ADDED_TO_FAVORITES 
    }
    
    }
