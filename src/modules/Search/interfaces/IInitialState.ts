import { IGetSearch } from "./IGetSearch";

export interface IInitialState{
    searchData:IGetSearch | null;
    browseCategories:{img:string,id:string,name:string}[];
    error:null | string;
    loading:boolean;
}