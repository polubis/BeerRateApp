import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';


export const addComment = (addCommentResult, addCommentErrors) => {
    return {
        type: actionsTypes.ADD_COMMENT,
        addCommentResult: addCommentResult,
        addCommentErrors: addCommentErrors
    }
}

export const addCommentActionCreator = (authorId, content, beerId, rate) => {
    return dispatch => {
        const objectToAdd = {
            RatingValue: rate,
            Content: content,
            BeerId: beerId,            
            UserId: authorId
        }

        axios.post('/api/rating/add', objectToAdd).then(response => {
            dispatch(addComment(true, []));

        }).catch(error => {
            const array = [];
            array.push("Błąd podczas dodawania opini");
            dispatch(addComment(false, array));
        });
    }
}
