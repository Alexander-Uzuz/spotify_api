import {get} from '../baseRequest';

export const getPlaylist = (token:string) => {
    return get('me/playlists', token)
}

export const getOnePlaylist = (data:{token:string, id:string}) => {
    return get(`playlists/${data.id}`, data.token)
}