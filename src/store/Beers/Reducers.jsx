import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loadedBeers: [],
    loadingAllBeersErrors: [],
    


    loadedBeer: null,
    loadedBeerErrors: [],

    addBeerResult: null,
    addBeerErrors: [],
    
    topBeers: [],
    getTopBeersErrors: [],
    fetchedGroups: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_BEERS:
            return updateObject(state, {loadedBeers: action.loadedBeers,
                loadingAllBeersErrors: []})

        case actionsTypes.FETCH_ALL_BEERS_ERRORS:
            return updateObject(state, {loadingAllBeersErrors: action.loadingAllBeersErrors})
        
        case actionsTypes.LOAD_BEER:
            return updateObject(state, { loadedBeer: action.loadedBeer, loadedBeerErrors: []})

        case actionsTypes.LOAD_BEER_ERRORS:
            return updateObject(state, { loadedBeerErrors: action.loadedBeerErrors })
        case actionsTypes.ADD_BEER:
            return updateObject(state, {addBeerResult: action.addBeerResult, addBeerErrors: action.addBeerErrors})
        case actionsTypes.GET_TOP_BEERS:
            return updateObject(state, {getTopBeersErrors: action.getTopBeersErrors, topBeers: action.topBeers, 
                fetchedGroups: action.fetchedGroups})
        
        default:
            break;
    }
    return state;   
}
export default reducer;


