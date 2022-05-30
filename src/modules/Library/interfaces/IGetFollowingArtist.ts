import { IImage } from "./ILibrary";

export interface IGetFollowingArtist{
    "external_urls" : {
        "spotify" : string
      },
      "followers" : {
        "href" : null | string,
        "total" : number
      },
      "genres" : string[] | null,
      "href" : string,
      "id" : string,
      "images" : IImage[],
      "name" : string,
      "popularity" : number,
      "type" : string,
      "uri" : string
}


export interface IGetFollowingArtists{
    artists:{
        items:IGetFollowingArtist[],
        next:null | string,
        total:number,
        cursors:{
            after:null | string;
        },
        limit:number;
        href:string;
    }
}




