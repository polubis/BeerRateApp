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



export const addBrewery = addBreweryResult => {
    return {
        type: actionsTypes.ADD_BREWERY,
        addBreweryResult: addBreweryResult
    }
}

export const fetchBreweryErrors = addBreweryErrors => {
    return {
        type: actionsTypes.FETCH_ADD_BREWERY_ERRORS,
        addBreweryErrors: addBreweryErrors
    }
}

export const addBreweryActionCreator = (name, desc, address, date, brewingGroup, history) => {
    return dispatch => {
        const objectToSend = {
            Name: name, 
            Description: desc,
            Address: address,
            CreateDate: date,
            BrewingGroupId: brewingGroup.id
        };

        axios.post("/api/brewery/add", objectToSend).then(response => {
            dispatch(addBrewery(true));

            setTimeout( () => {
                history.push("/browary");
            }, 1500);
            dispatch(fetchAllBreweriesActionCreator());
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");

            dispatch(fetchBreweryErrors(error.response.status === 404 ? 
            array : error.response.data.errors));
        })
    }
}