import {get} from '../baseRequest';

export const getPlaylist = (data:{token:string,id:string}) => {
    return get(`playlists/${data.id}`,data.token)
}