import {get} from '../baseRequest';

export const getSearchData = (data:{token:string,searchValue:string}) => {
    return get(`search?q=${data.searchValue}&type=track&market=ES&limit=10&offset=5`, data.token)
}

export const getBrowseCategories = (token:string) => {
    return get('browse/categories?country=SE&locale=sv_SE&limit=12&offset=5',token)
}

export const getCategorysPlaylists = (data:{token:string, id:string, offset:number}) =>{
    return get(`browse/categories/${data.id}/playlists?country=SE&limit=12&offset=${data.offset}`,data.token)
}