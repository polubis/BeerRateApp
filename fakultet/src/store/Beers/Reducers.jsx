import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loadingAllBeersErrors: [],
    loadedBeers: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_BEERS:
            return updateObject(state, {loadedBeers: action.loadedBeers, loadingAllBeersErrors: []})

        case actionsTypes.LOADING_BEERS_ERROR:
            return updateObject(state, {loadingAllBeersErrors: action.loadedBeers})
        
        default:
            break;
    }
    return state;   
}
export default reducer;


