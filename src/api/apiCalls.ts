import axios from 'axios';

const baseApiURL = 'http://localhost:8000/api'


export const apiUser = axios.create({
    baseURL: baseApiURL + '/users'
});

