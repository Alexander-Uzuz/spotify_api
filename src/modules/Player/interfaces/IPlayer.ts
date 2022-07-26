import { IGetPlayerItems, IPlayerItem } from "./IGetPlayerItems";
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
    player:{
        basic:ITrack[],
        extra:ITrack[]
    },
    currentTrack:ITrack | null,
    error:null | string,
    search:boolean;
    loading:boolean;
    flag:string;
    switchPlayer:"basic" | "extra"
}