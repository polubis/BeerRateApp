import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';

export const fetchAllBeers = loadedBeers => {
    return {
        type: actionsTypes.FETCH_ALL_BEERS,
        loadedBeers: loadedBeers
    };
}
export const loadingBeersError = loadingAllBeersErrors => {
    return {
        type: actionsTypes.LOADING_BEERS_ERROR,
        loadingAllBeersErrors: loadingAllBeersErrors
    };
}


export const fetchAllBeersActionCreator = () => {
    return dispatch => {
       
        axios.get('/api/beer').then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error.response);            
        });
    }
}
