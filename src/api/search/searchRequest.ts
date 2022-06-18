import {get} from '../baseRequest';

export const getSearchData = (data:{token:any,searchValue:string}) => {
    return get(`search?q=${data.searchValue}&type=track&market=ES&limit=10&offset=5`, data.token)
}