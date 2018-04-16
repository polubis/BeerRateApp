import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';
import { afterLogingInPage } from '../../consts/navigationLinks';

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
        axios.post('api/account/register', formObject).then(response => {
            dispatch(register(""));
            historyObject.push(afterLogingInPage);
        }).catch(error => {
            dispatch(register(error.response.data.errors));
        })
    }
}