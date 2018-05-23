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

export const addGroup = (addGroupErrors, addGroupResult) => {
    return {
        type: actionsTypes.ADD_GROUP,
        addGroupErrors: addGroupErrors,
        addGroupResult: addGroupResult
    }
}   

export const addGroupActionCreator = (formObject, history, files) => {
    return dispatch => {
        axios.post('/api/brewinggroup/add', formObject).then(response => {
            if(files.length > 0){
                dispatch(addPictureActionCreator(files, response.data.successResult.id, history));
            }
            
            else{
                dispatch(addGroup([], true));
                setTimeout(() => {
                    history.push("/grupy");
                    dispatch(fetchAllGroupsActionCreator());
                }, 1500);
            }
            
            
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(addGroup(!error.hasOwnProperty('status') ? array : 
                error.response.data.errors[0].value, false));
        })
    }
}

export const addPicture = (addPictureResult, addPictureErrors) => {
    return {
        type: actionsTypes.ADD_PICTURE,
        addPictureResult: addPictureResult,
        addPictureErrors: addPictureErrors
    }
}

export const addPictureActionCreator = (files, groupId, history) => {
    return dispatch => {
        let formData = new FormData();
        formData.append("brewingGroupPicture", files[0]);
        formData.append("brewingGroupId", groupId);
        axios({
            method: 'post',
            url: '/api/brewinggroup/addpicture',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data'}}
        }).then(response => {
            dispatch(addGroup([], true));
            setTimeout(() => {
                history.push("/grupy");
                dispatch(fetchAllGroupsActionCreator());
            }, 1500);
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(addGroup(!error.hasOwnProperty('status') ? array : 
                error.response.data.errors[0].value, false));
        })


    }
}





export const loadGroup = loadedBeerGroup => {
    return {
        type: actionsTypes.LOAD_GROUP,
        loadedBeerGroup: loadedBeerGroup
    }
}
export const loadGroupErrors = loadedBeerGroupErrors => {
    return {
        type: actionsTypes.LOAD_GROUP_ERRORS,
        loadedBeerGroupErrors: loadedBeerGroupErrors
    }
}
export const loadGroupActionCreator = id => {
    return dispatch => {
        axios.get("/api/brewinggroup/" + id ).then(response => {
            dispatch(loadGroup(response.data));
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(loadGroupErrors(error.response.status === 404 ? array : 
                error.response.data.errors));
        })
    }
}