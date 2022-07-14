import { IGetSearch } from "./IGetSearch";

export interface IInitialState{
    browseCategories:{img:string,id:string,name:string}[];
    error:null | string;
    loading:boolean;
    offset:number;
    total:number;
}

export interface ISearchDataItem{
    id:string,
    preview_url:string,
    songName:string,
    albumName?:string,
    artist:string,
    img:string,
}

