import { IGetPlaylistItems, IPlaylistItem } from "./IGetPlayilstItems";
import { IGetFollowingArtistItem } from "./IGetFollowArtistItem";


interface ITrack{
    id:string,
    preview_url:string,
    songName:string,
    artist:string,
    img:string
    albumName?:string;
}

export interface IInitialState{
    playlist:ITrack[],
    currentTrack:ITrack | null,
    error:null | string,
    search:boolean;
    loading:boolean;
    flag:string;
}