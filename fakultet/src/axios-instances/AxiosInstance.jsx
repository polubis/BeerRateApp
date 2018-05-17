import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://piwopinieback.azurewebsites.net/'
})

export default instance;