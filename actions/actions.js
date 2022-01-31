// import RNFetchBlob from "rn-fetch-blob"
import { ActionCode } from "./constants"
import data from "./data"
export const fetchAirlines = (url) => {
    return (dispatch) => {
        // return dispatch({type: ActionCode.FETCH, airlineList: data, loading:false})
        dispatch({type: ActionCode.LOADING, loading: true})
        return fetch(url)
               .then(response => response.json())
               .then(json => dispatch({type: ActionCode.FETCH, airlineList: json, loading:false})
               )
               .catch(err => {
                    console.log(err.message)
                    dispatch({type: ActionCode.ERROR, error:{msg: err.message}})
                }
                ) 
    }
}


export const setFavorite = (id) => {
    return (dispatch) => {
        dispatch({type: ActionCode.SET_FAVORITES, id: id})
    }
}