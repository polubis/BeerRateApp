import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';

export const fetchAllBreweries = loadedBreweries => {
    return {
        type: actionsTypes.FETCH_ALL_BREWERIES,
        loadedBreweries: loadedBreweries
    };
}
export const loadingBreweriesError = loadingAllBreweriesErrors => {
    return {
        type: actionsTypes.LOADING_BREWERIES_ERROR,
        loadingAllBreweriesErrors: loadingAllBreweriesErrors
    };
}


export const fetchAllBreweriesActionCreator = () => {
    return dispatch => {
       
        axios.get('/api/brewinggroup').then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error.response);            
        });
    }
}
