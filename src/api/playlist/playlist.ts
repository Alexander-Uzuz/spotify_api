import {get} from '../baseRequest';

export const getPlaylistItem = (data:{token:any, id:string}) => {
    return get(`playlists/${data.id}/tracks`,data.token)
}


