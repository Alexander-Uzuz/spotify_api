export interface IInitialState  {
    title:string,
    subtitle:string,
    type:string,
    img:string,
    offset:number;
    total:number;
    currentItemId:string;
    checkFollow:boolean;
    artistId:string;
    albumId:string;
    albums:IAlbum[],
    error:null | string,
    loading:boolean,
};

export interface IAlbum{
    id: string;
    img: string;
    name: string;
    description?: string | undefined;
  }