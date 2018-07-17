import { AsyncStorage } from 'react-native';

// const API_URL = 'http://api.match7.co/'
const API_URL = 'http://35.198.236.177/api/'

export const postNoAuth = (body, API) => {
    return fetch(API_URL + API, {
        method: 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    })
}

export const getNoAuth = (API) => {
    return fetch(API_URL + API, {
        method: 'GET',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

export const get = async (API) => {
    var token = await AsyncStorage.getItem('token');
    return fetch(API_URL + API, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token
        }
    })
}

export const post = async (body, API) => {
    var token = await AsyncStorage.getItem('token');
    return fetch(API_URL + API, {
        method : 'POST',
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : token
        },
        body : body
    })
}

export const put = async (body, API) => {
    var token = await AsyncStorage.getItem('token');
    return fetch(API_URL + API, {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token
        },
        body : body
    })
}

export const remove = async (body, API) => {
    var token = await AsyncStorage.getItem('token');
    return fetch(API_URL + API, {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : token
        },
        body : body
    })
}

