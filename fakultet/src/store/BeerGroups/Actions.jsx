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
            console.log(response.data);
        }).catch(error => {
            console.log(error.response);            
        });
    }
}
