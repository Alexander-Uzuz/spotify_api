export interface IGetSearch{
    "artists" : {
        "href" : string,
        "items" : any,
        "limit" : number,
        "next" : null | string,
        "offset" : number,
        "previous" : string,
        "total" : number
      },
      "tracks" : ITracks
}

export interface ITracks{
  "href" : string,
  "items" : IGetSearchItem[],
  "limit" : number,
  "next" : string,
  "offset" :number,
  "previous" : string,
  "total" : number 
}

export interface ITracks{
  "href" : string,
  "items" : IGetSearchItem[],
  "limit" : number,
  "next" : string,
  "offset" :number,
  "previous" : string,
  "total" : number 
}

export interface IGetSearchItem{
  "key"?:string;
    "album" : {
      "album_type" : string,
      "artists" : [ {
        "external_urls" : {
          "spotify" : string
        },
        "href" : string,
        "id" : string,
        "name" : string,
        "type" : string,
        "uri" : string
      } ],
      "external_urls" : {
        "spotify" : string
      },
      "href" : string,
      "id" : string,
      "images" : [ {
        "height" : number,
        "url" : string,
        "width" : number
      }, {
        "height" : number,
        "url" : string,
        "width" : number
      }, {
        "height" : number,
        "url" : string,
        "width" : number
      } ],
      "name" : string,
      "release_date" : string,
      "release_date_precision" : string,
      "total_tracks" : number,
      "type" : string,
      "uri" : string
    },
    "artists" : [ {
      "external_urls" : {
        "spotify" : string
      },
      "href": string,
      "name" : string,
      "type" : string,
      "uri" : string
    } ],
    "disc_number" : number,
    "duration_ms" : number,
    "explicit" : boolean,
    "external_ids" : {
      "isrc" : string
    },
    "external_urls" : {
      "spotify" : string
    },
    "href" : string,
    "id" : string,
    "is_local" : boolean,
    "is_playable" : boolean,
    "name" : string,
    "popularity" : number,
    "preview_url" : string,
    "track_number" : number,
    "type" : string,
    "uri" : string
  }