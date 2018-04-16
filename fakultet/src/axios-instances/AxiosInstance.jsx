import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://piwobackapi.azurewebsites.net/'
})

export default instance;