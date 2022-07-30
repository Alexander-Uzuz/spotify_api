import {get, put, remove} from '../baseRequest';

export const followArtist = (data:{token:string,id:string}) => {
    return put(`me/following?type=artist&ids=${data.id}`,JSON.stringify({}), data.token)
}

export const unfollowArtist = (data:{token:string,id:string}) => {
    return remove(`me/following?type=artist&ids=${data.id}`, data.token)
}

export const checkFollowArtist = (data:{token:string,artistId:string}) => {
    return get(`me/following/contains?type=artist&ids=${data.artistId}`, data.token);
}

