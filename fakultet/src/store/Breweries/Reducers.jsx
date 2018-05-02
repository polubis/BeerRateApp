import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loadingAllBreweriesErrors: [],
    loadedBreweries: [],


    loadedBrewery: null,
    loadedBreweryErrors: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_BREWERIES:
            return updateObject(state, {loadedBreweries: action.loadedBreweries, loadingAllBreweriesErrors: []})

        case actionsTypes.LOADING_BREWERIES_ERRORS:
            return updateObject(state, {loadingAllBreweriesErrors: action.loadingAllBreweriesErrors})
        
        case actionsTypes.LOAD_BREWERY:
            return updateObject(state, {loadedBrewery: action.loadedBrewery, loadedBreweryErrors: []})

        case actionsTypes.LOADING_BREWERY_ERRORS:
            return updateObject(state, {loadedBreweryErrors: action.loadedBreweryErrors})
        default:
            break;
    }
    return state;   
}
export default reducer;


