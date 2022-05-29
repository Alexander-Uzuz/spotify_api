import {get} from '../baseRequest';

export const getData = (token:string) => {
    return get('me',token)
}

export const getPlaylist = (token:string) => {
    return get('me/playlist', JSON.parse(localStorage.getItem('token') || '{}'))
}