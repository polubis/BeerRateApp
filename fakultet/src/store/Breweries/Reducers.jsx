import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loadingAllBreweriesErrors: [],
    loadedBreweries: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_BREWERIES:
            return updateObject(state, {loadedBreweries: action.loadedBreweries, loadingAllBreweriesErrors: []})

        case actionsTypes.LOADING_BREWERIES_ERRORS:
            return updateObject(state, {loadingAllBreweriesErrors: action.loadingAllBreweriesErrors})
        
        default:
            break;
    }
    return state;   
}
export default reducer;


