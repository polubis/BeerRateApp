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


export const loadBrewery = loadedBrewery => {
    return {
        type: actionsTypes.LOAD_BREWERY,
        loadedBrewery: loadedBrewery
    };

}


export const loadingBreweryErrors = loadedBreweryErrors => {
    return {
        type: actionsTypes.LOADING_BREWERY_ERRORS,
        loadedBreweryErrors: loadedBreweryErrors
    };
}

export const loadBreweryActionCreator = id => {
    return dispatch => {
        axios.get("/api/brewery/" + id).then( response => {
            dispatch(loadBrewery(response.data));
        }).catch( error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(loadingBreweryErrors(error.response.status === 404 ? 
            array : error.response.data.errors));
        })
        
    }
}
