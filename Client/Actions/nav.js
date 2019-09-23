export const NEXT_PAGE = "NEXT_PAGE";


/**
 * 
 * @param {Number} pageUpdateBy - a diffence between current page and the next page (- or +)
 */
export function nextPage(pageUpdateBy=0){
return {
type:NEXT_PAGE,
pageUpdateBy
}
}