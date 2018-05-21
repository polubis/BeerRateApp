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

            dispatch(fetchAllBeersErrors(error.hasOwnProperty('status') ? 
            error.response.data.errors[0].value : array));
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
            dispatch(loadBeer(response.data));
        }).catch(error => {
            const array = [];
            array.push("Błąd serwera");
            dispatch(loadBeerErrors(error.response.status === 404 ? 
            array : error.response.data.errors));
        })

    }
}

export const addBeer = (addBeerResult, addBeerErrors) => {
    return {
        type: actionsTypes.ADD_BEER,
        addBeerResult: addBeerResult,
        addBeerErrors: addBeerErrors
    }
}
export const addBeerActionCreator = (breweryId, history, copiedCore, copiedOther) => {
    return dispatch => {
        const objectToSend = {
            Name: copiedCore[0].val,
            Description: copiedCore[1].val,
            Alcohol: copiedCore[2].val,
            Price: copiedCore[3].val,
            Color: copiedOther[0].val,
            Country: copiedOther[1].val,
            Ibu: copiedOther[2].val === "" ? 0 : copiedOther[2].val,
            Blg: copiedOther[3].val === "" ? 0 : copiedOther[3].val,
            Type: copiedOther[4].val,
            Distribution: copiedOther[5].val,
            KindOf: copiedOther[6].val,
            BreweryId: breweryId
        }
        console.log(objectToSend);
        axios.post("/api/beer/add", objectToSend).then(response => {
            dispatch(addBeer(true, []));
            setTimeout(() => {
                history.push("piwa/" + response.data.successResult.id);
            }, 2000);
        }).catch(error => {
            console.log(error.response);
            const array = [];
            array.push("Wystąpił błąd podczas dodawania piwa");
            dispatch(addBeer(false, array));
        })
      
    }
}

export const getTopBeers = (getTopBeersErrors, topBeers, fetchedGroups) => {
    return {
        type: actionsTypes.GET_TOP_BEERS,
        getTopBeersErrors: getTopBeersErrors,
        topBeers: topBeers,
        fetchedGroups: fetchedGroups
    }
}
export const getTopBeersActionCreator = () => {
    return dispatch => {
        axios.get("/api/beer/best").then(response => {
            axios.get("/api/brewinggroup").then(secondResponse => {
                dispatch(getTopBeers([], response.data, secondResponse.data));
            }).catch(error => {
                dispatch(getTopBeers(["Błąd serwera"], [], []));
            })
        }).catch(error => {
            dispatch(getTopBeers(["Błąd serwera"], [], []));
        })
    }
}