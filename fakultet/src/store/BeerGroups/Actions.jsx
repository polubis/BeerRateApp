import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';

export const fetchAllGroups = loadedGroups => {
    return {
        type: actionsTypes.FETCH_ALL_GROUPS,
        loadedGroups: loadedGroups
    };
}
export const loadingGroupError = loadingAllGroupsErrors => {
    return {
        type: actionsTypes.LOADING_GROUPS_ERROR,
        loadingAllGroupsErrors: loadingAllGroupsErrors
    };
}


export const fetchAllGroupsActionCreator = () => {
    return dispatch => {
       
        axios.get('/api/brewinggroup').then(response => {
            dispatch(fetchAllGroups(response.data));
        }).catch(error => {
            const array = [];
            array.push("Wkradł się jakiś karaczan");
            dispatch(loadingGroupError(array));
        });
    }
}
