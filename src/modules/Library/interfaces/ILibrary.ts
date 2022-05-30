import { IGetPlaylist } from "./IGetPlaylists";

export interface IInitialState{
    playlists:IGetPlaylist[],
    artists:any[],
    error:null | string;
    loading:boolean;
}

export interface IImage{
        "height" : number,
        "url" : string,
        "width" : number
}