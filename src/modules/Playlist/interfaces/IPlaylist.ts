import { IGetPlaylistItems, IPlaylistItem } from "./IGetPlayilstItems"


export interface IInitialState{
    playlist:IPlaylistItem[],
    currentTrack:IPlaylistItem | null,
    error:null | string,
    loading:boolean;
}