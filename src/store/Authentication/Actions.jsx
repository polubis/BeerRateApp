import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';
import { afterLogingInPage } from '../../consts/navigationLinks';

export const logingIn = loginResult => {
    return {
        type: actionsTypes.LOGING_IN,
        loginResult: loginResult
    };
}
export const changeLoginStatus = loginStatus => {
    return {
        type: actionsTypes.CHANGE_LOGIN_STATUS,
        loginStatus: loginStatus
    };
}

export const logingInActionCreator = (logingObject) => {
    return dispatch => {
        const newLogingObject = {
            Username: logingObject[0].value,
            Password: logingObject[1].value
        }
        axios.post('/api/account/login', newLogingObject).then(response => {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('loggedUserData', JSON.stringify(response.data.successResult));
            }
            const isUserAdmin = response.data.successResult.username === "administrator" ? true : false;
            dispatch(logingIn([], true));
            dispatch(checkIsUserAdmin());
            dispatch(changeLoginStatus(true));

            
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(changeLoginStatus(false));
            dispatch(logingIn(!error.hasOwnProperty('status') ? array : 
                error.response.data.errors[0].valuey));
                
            
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
            dispatch(changeRegisterStatus(true));

        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(register(!error.hasOwnProperty('status') ? array : 
                error.response.data.errors[0].valuey));

            dispatch(changeRegisterStatus(false));
        })
    }
}
export const changeRegisterStatus = status => {
    return {
        type: actionsTypes.CHANGE_REGISTER_STATUS,
        registerStatus: status
    };
}



export const setUserAdmin = isUserAdmin => {
    return {
        type: actionsTypes.SET_USER_ADMIN,
        isUserAdmin: isUserAdmin
    }
}

export const checkIsUserAdmin = () => {
    return dispatch => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUserData'));
        const isUserAdmin = loggedUser ? loggedUser.username === "administrator" ? true : false : null;
        dispatch(setUserAdmin(isUserAdmin));
    }
}