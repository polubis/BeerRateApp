import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';

export const fetchAddCommentErrors = addCommentErrors => {
    return {
        type: actionsTypes.FETCH_ADD_COMMENT_ERRORS,
        addCommentErrors: addCommentErrors
    };
}



export const addCommentActionCreator = (authorId, content, beerId) => {
    return dispatch => {
        const objectToAdd = {
            authorId: authorId,
            content: content,
            beerId: beerId
        }

        axios.post('/api/comments/add', objectToAdd).then(response => {
            dispatch(fetchAddCommentErrors([]));

        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(fetchAddCommentErrors(error.response.status === 404 ? 
            array : error.response.data.errors));
        });
    }
}


