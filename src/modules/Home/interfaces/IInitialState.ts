export interface IInitialState{
    featuredPlaylist:IPlaylist[];
    currentItemId:string;
    error:null | string;
    loading:boolean;
    offset:number;
    total:number;
}

export interface IPlaylist{
    img:string;
    id:string;
    name:string;
    description?:string;
}