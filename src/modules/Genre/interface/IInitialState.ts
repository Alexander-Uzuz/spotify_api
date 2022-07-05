export interface IInitialState{
    playlistGenre:IPlaylistGenreItem[],
    error:null | string,
    loading:boolean,
    currentItemId:string;
    offset:number;
    total:number;
}

export interface IPlaylistGenreItem{
    description:string;
    id:string;
    name:string;
    img:string;
}