import {get} from '../baseRequest';

export const getSavePlaylist = (token:string) => {
    return get('me/playlists', token)
}

export const getOnePlaylist = (data:{token:string, id:string}) => {
    return get(`playlists/${data.id}`, data.token)
}


export const getPlaylistItem = (data:{token:any, id:string}) => {
    return get(`playlists/${data.id}/tracks?ountry=SE&limit=10&offset=5`,data.token)
}

export const getFollowArtist = (token:string) =>{
    return get('me/following?type=artist&limit=10', token)
}

export const getFollowArtistItem = (data:{token:any, id:string}) =>{
    return get(`artists/${data.id}/top-tracks?market=ES`,data.token)
}

export const getAlbumsItem = (data:{token:any, id:string}) =>{
    return get(`albums/${data.id}/tracks`, data.token)
}

export const getSaveAlbums = (token:string) => {
    return get('me/albums',token);
}

