import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    addCommentErrors: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FETCH_ADD_COMMENT_ERRORS:
            return updateObject(state, { addCommentErrors: action.addCommentErrors})
            
        default:
            break;
    }
    return state;   
}
export default reducer;

