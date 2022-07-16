import {get} from '../baseRequest';

export const getFeaturedPlaylists = (data:{token:string, offset:number}) => {
    return get(`browse/featured-playlists?country=SE&locale=sv_SE&timestamp=2014-10-23T09%3A00%3A00.000Z&limit=8&offset=${data.offset}`, data.token);
}


