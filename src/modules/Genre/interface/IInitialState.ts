export interface IInitialState{
    playlistGenre:IPlaylistGenreItem[],
    error:null | string,
    loading:boolean,
    currentItemId:string;
}

export interface IPlaylistGenreItem{
    description:string;
    name:string;
    id:string;
    img:string;
}