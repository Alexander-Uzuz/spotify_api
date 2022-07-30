import {get, put, remove} from '../baseRequest';

export const checkFollowPlaylist = (data:{token:string,playlistId:string,userId:string}) => {
    return get(`playlists/${data.playlistId}/followers/contains?ids=${data.userId}`, data.token);
}

export const followPlaylist = (data:{id:string,token:string}) => {
    return put(`playlists/${data.id}/followers`, JSON.stringify({public: true}), data.token)
}

export const unfollowPlaylist = (data:{id:string,token:string}) => {
    return remove(`playlists/${data.id}/followers`, data.token)
}




