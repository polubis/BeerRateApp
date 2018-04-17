import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loginResult: [],
    registerResult: [],
    registerStatus: undefined
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.LOGING_IN:
            return updateObject(state, {loginResult: action.loginResult})
        case actionsTypes.REGISTER:
            return updateObject(state, {registerResult: action.registerResult, registerStatus: undefined})
        case actionsTypes.CHANGE_REGISTER_STATUS:
            return updateObject(state, {registerStatus: action.registerStatus})

        default:
            break;
    }
    return state;   
}
export default reducer;


