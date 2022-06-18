import { IGetSearch } from "./IGetSearch";

export interface IInitialState{
    searchData:IGetSearch | null;
    error:null | string;
    loading:boolean;
}