import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';

export const fetchAllBreweries = loadedBreweries => {
    return {
        type: actionsTypes.FETCH_ALL_BREWERIES,
        loadedBreweries: loadedBreweries
    };
}
export const loadingBreweriesErrors = loadingAllBreweriesErrors => {
    return {
        type: actionsTypes.LOADING_BREWERIES_ERRORS,
        loadingAllBreweriesErrors: loadingAllBreweriesErrors
    };
}


export const fetchAllBreweriesActionCreator = () => {
    return dispatch => {
       
        axios.get('/api/brewery').then(response => {
            dispatch(fetchAllBreweries(response.data));

        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            
            dispatch(loadingBreweriesErrors(error.response.status === 404 ? 
            array : error.response.data.errors));
        });
    }
}
