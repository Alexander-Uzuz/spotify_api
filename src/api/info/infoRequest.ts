import {get} from '../baseRequest';

export const getPlaylist = (data:{token:string,id:string}) => {
    return get(`playlists/${data.id}`,data.token)
}


export const getArtist = (data:{token:string,id:string}) => {
    return get(`artists/${data.id}`,data.token)
}

export const getTopTracksArtist = (data:{token:string,id:string}) => {
    return get(`artists/${data.id}/top-tracks?market=ES`,data.token)
}

export const getArtistAlbums = (data:{token:string,id:string, offset:number}) => {
    return get(`artists/${data.id}/albums?include_groups=album%2Cappears_on&market=ES&limit=6&offset=${data.offset}`,data.token)
}