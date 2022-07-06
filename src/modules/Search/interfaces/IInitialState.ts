import { IGetSearch } from "./IGetSearch";

export interface IInitialState{
    searchData:ISearchDataItem[];
    browseCategories:{img:string,id:string,name:string}[];
    error:null | string;
    loading:boolean;
}

export interface ISearchDataItem{
    id:string,
    preview_url:string,
    songName:string,
    albumName?:string,
    artist:string,
    img:string,
}

