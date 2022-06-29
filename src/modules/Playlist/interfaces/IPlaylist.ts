import { IGetPlaylistItems, IPlaylistItem } from "./IGetPlayilstItems";
import { IGetFollowingArtistItem } from "./IGetFollowArtistItem";


interface ITrack{
    id:string,
    preview_url:string,
    name:string,
    artistName:string,
    img:string
}

export interface IInitialState{
    playlist:ITrack[],
    currentTrack:ITrack | null,
    error:null | string,
    loading:boolean;
    flag:string;
}