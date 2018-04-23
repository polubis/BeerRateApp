import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loadingAllGroupsErrors: [],
    loadedGroups: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FETCH_ALL_GROUPS:
            return updateObject(state, {loadedGroups: action.loadedGroups, loadingAllGroupsErrors: []})

        case actionsTypes.LOADING_GROUPS_ERROR:
            return updateObject(state, {loadingAllGroupsErrors: action.loadingAllGroupsErrors})
        
        default:
            break;
    }
    return state;   
}
export default reducer;


