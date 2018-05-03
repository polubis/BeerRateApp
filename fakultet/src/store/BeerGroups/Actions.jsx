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
            array.push("Błąd serwera");
            dispatch(loadingGroupError(array));
        });
    }
}

export const addGroup = addGroupErrors => {
    return {
        type: actionsTypes.ADD_GROUP,
        addGroupErrors: addGroupErrors
    }
}   

export const addGroupActionCreator = (formObject, history) => {
    return dispatch => {
        axios.post('/api/brewinggroup/add', formObject).then(response => {
            dispatch(addGroup([]));
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
        
            
            dispatch(addGroup(error.response.status === 404 ? 
            array : error.response.data.errors));
        })
    }
}