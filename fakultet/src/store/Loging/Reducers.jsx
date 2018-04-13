import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';
import { initialState } from './InitialState.jsx';

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.LOGING_IN:
            return updateObject(state, {logingObject: action.logingObject})
        
        default:
            break;
    }
    return state;   
}
export default reducer;


