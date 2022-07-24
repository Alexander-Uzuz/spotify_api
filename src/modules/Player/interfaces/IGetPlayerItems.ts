export interface IGetPlayerItems{
    "href" : string,
    "items" : IPlayerItem[],
    "limit" : number,
    "next" : null | string,
    "offset" : number,
    "previous" : null | string,
    "total" : number,
    flag:string;
  }

  export interface IPlayerItem{
    "added_at" : string,
    "added_by" : {
      "external_urls" : {
        "spotify" : string
      },
      "href" : string,
      "id" : string,
      "type" : string,
      "uri" : string
    },
    "is_local" : boolean,
    "primary_color" : null,
    "track" : {
      "album" : {
        "album_type" : string,
        "artists" : [ {
          "external_urls" : {
            "spotify" : string
          },
          "href" : string,
          "id" : string,
          "name" : string,
          "type" :string,
          "uri" : string
        } ],
        "available_markets" :string[],
        "external_urls" : {
          "spotify" : string
        },
        "href" : string,
        "id" : string,
        "images" : IImage[],
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
        "href" : string,
        "id" : string,
        "name" : string,
        "type" :string,
        "uri" : string
      } ],
      "available_markets" : string[],
      "disc_number" : number,
      "duration_ms" : number,
      "episode" : boolean,
      "explicit" : boolean,
      "external_ids" : {
        "isrc" : string
      },
      "external_urls" : {
        "spotify" : string
      },
      "href" : string,
      "id" : "0zBQznV5QeLsqPz5sgU2hq",
      "is_local" : boolean,
      "name" : string,
      "popularity" : number,
      "preview_url" : string,
      "track" : boolean,
      "track_number" : number,
      "type" : string,
      "uri" : string
    },
    "video_thumbnail" : {
      "url" : null | string
    }
  }

  export interface IImage{
    "height" : number,
    "url" : string,
    "width" : number
}