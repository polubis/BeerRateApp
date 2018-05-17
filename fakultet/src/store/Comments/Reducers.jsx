import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {

    addCommentResult: null,
    addCommentErrors: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.ADD_COMMENT:
            return updateObject(state, { addCommentResult: action.addCommentResult, 
            addCommentErrors: action.addCommentErrors})    
        default:
            break;
    }
    return state;   
}
export default reducer;

