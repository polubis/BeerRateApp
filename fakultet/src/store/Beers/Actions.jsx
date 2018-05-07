import * as actionsTypes from './ActionTypes';
import axios from '../../axios-instances/AxiosInstance';

export const fetchAllBeers = loadedBeers => {
    return {
        type: actionsTypes.FETCH_ALL_BEERS,
        loadedBeers: loadedBeers
    };
}
export const fetchAllBeersErrors = loadingAllBeersErrors => {
    return {
        type: actionsTypes.FETCH_ALL_BEERS_ERRORS,
        loadingAllBeersErrors: loadingAllBeersErrors
    };
}


export const fetchAllBeersActionCreator = () => {
    return dispatch => {
       
        axios.get('/api/beer').then(response => {
            dispatch(fetchAllBeers(response.data));
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(fetchAllBeersErrors(error.response.status === 404 ? 
            array : error.response.data.errors));
        });
    }
}










export const loadBeer = loadedBeer => {
    return {
        type: actionsTypes.LOAD_BEER,
        loadedBeer: loadedBeer
    }
}
export const loadBeerErrors = loadedBeerErrors => {
    return {
        type: actionsTypes.LOAD_BEER_ERRORS,
        loadedBeerErrors: loadedBeerErrors
    }
}

export const loadBeerActionCreator = id => {
    return dispatch => {
        axios.get('/api/beer/' + id).then(response => {
            console.log(response.data);
            dispatch(loadBeer(response.data));
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            console.log(error.response.status);
            dispatch(loadBeerErrors(error.response.status === 404 ? 
            array : error.response.data.errors));
        })

    }
}
