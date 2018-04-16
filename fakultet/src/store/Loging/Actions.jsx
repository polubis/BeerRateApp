import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';
import { afterLogingInPage } from '../../consts/navigationLinks';

export const logingIn = (loginResult) => {
    return {
        type: actionsTypes.LOGING_IN,
        loginResult: loginResult
    };
}

export const logingInActionCreator = (logingObject, historyObject) => {
    return dispatch => {
        const newLogingObject = {
            Username: logingObject[0].value,
            Password: logingObject[1].value
        }
        axios.post('/api/account/login', newLogingObject).then(response => {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('loggedUserData', JSON.stringify(response.data.successResult));
            }
            
            const zeroError = [];
            dispatch(logingIn(zeroError));
            historyObject.push(afterLogingInPage);
        }).catch(error => {
            dispatch(logingIn(error.response.data.errors));
        });
    }
}

