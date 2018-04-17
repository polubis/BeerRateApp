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
        const zeroError = [];
        axios.post('/api/account/login', newLogingObject).then(response => {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('loggedUserData', JSON.stringify(response.data.successResult));
            }
            
           
            dispatch(logingIn(zeroError));
            historyObject.push(afterLogingInPage);
        }).catch(error => {
            dispatch(logingIn(error.response.data.errors));
            
        });
    }
}

export const register = (registerResult) => {
    return {
        type: actionsTypes.REGISTER,
        registerResult: registerResult
    };
}

export const registerActionCreator = (registerObject, historyObject) => {
    return dispatch => {
        const formObject = {
            Username: registerObject[0].value,
            Email: registerObject[1].value,
            Password: registerObject[2].value,
            ConfirmedPassword: registerObject[3].value
        }
        const zeroError = [];
        axios.post('api/account/register', formObject).then(response => {
            dispatch(register(zeroError));
        }).catch(error => {
            dispatch(register(error.response.data.errors));
        })
    }
}

