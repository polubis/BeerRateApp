import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loadingAllGroupsErrors: [],
    loadedGroups: [],

    addGroupErrors: [],
    addGroupResult: null,

    loadedBeerGroup: null,
    loadedBeerGroupErrors: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_GROUPS:
            return updateObject(state, {loadedGroups: action.loadedGroups, loadingAllGroupsErrors: []})

        case actionsTypes.LOADING_GROUPS_ERROR:
            return updateObject(state, {loadingAllGroupsErrors: action.loadingAllGroupsErrors})
        
        case actionsTypes.ADD_GROUP:
            return updateObject(state, { addGroupErrors: action.addGroupErrors, addGroupResult: action.addGroupResult})
        
        case actionsTypes.LOAD_GROUP:
            return updateObject(state, { loadedBeerGroup: action.loadedBeerGroup, loadedBeerGroupErrors: [] })

        case actionsTypes.LOAD_GROUP_ERRORS:
            return updateObject(state, { loadedBeerGroupErrors: action.loadedBeerGroupErrors })
        default:
            break;
    }
    return state;   
}
export default reducer;


