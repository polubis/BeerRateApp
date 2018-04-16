import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    registerResult: []
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.REGISTER:
            return updateObject(state, {registerResult: action.registerResult})
            
        
        default:
            break;
    }
    return state;   
}
export default reducer;
