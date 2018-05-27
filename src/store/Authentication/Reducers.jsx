import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loginResult: [],
    registerResult: [],
    registerStatus: undefined,
    isUserAdmin: null,
    loginStatus: null

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.LOGING_IN:
            return updateObject(state, {loginResult: action.loginResult})

        case actionsTypes.REGISTER:
            return updateObject(state, {registerResult: action.registerResult, registerStatus: undefined})
        case actionsTypes.CHANGE_REGISTER_STATUS:
            return updateObject(state, {registerStatus: action.registerStatus})
        case actionsTypes.SET_USER_ADMIN:
            return updateObject(state, { isUserAdmin: action.isUserAdmin })
        case actionsTypes.CHANGE_LOGIN_STATUS:
            return updateObject(state, { loginStatus: action.loginStatus })
        default:
            break;
    }
    return state;   
}
export default reducer;


