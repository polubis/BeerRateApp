import * as actionsTypes from './ActionTypes';

export const logingIn = (logingObject) => {
    return {
        type: actionsTypes.LOGING_IN,
        logingObject: logingObject
    };
}