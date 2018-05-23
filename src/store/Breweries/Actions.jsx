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
            dispatch(loadingBreweriesErrors([]));
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



export const addBrewery = (addBreweryErrors, addBreweryResult) => {
    return {
        type: actionsTypes.ADD_BREWERY,
        addBreweryErrors: addBreweryErrors,
        addBreweryResult: addBreweryResult
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
            console.log(response.data);
            setTimeout( () => {
                history.push("/browary");
                dispatch(addBrewery([], true));
            }, 1500);

        }).catch(error => {
            console.log(error.response);
            const array = [];
            array.push("Błąd serwera");
            dispatch(addBrewery(array, false));
        })
    }
}