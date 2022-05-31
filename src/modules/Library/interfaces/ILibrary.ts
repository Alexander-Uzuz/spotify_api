import { IGetPlaylist } from "./IGetPlaylists";
import {IGetFollowingArtist} from './IGetFollowingArtist';

export interface IInitialState{
    playlists:IGetPlaylist[],
    artists:any[],
    albums:any[],
    error:null | string;
    loading:boolean;
}

export interface IImage{
        "height" : number,
        "url" : string,
        "width" : number
}