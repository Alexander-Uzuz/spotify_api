export interface IGetSaveAlbums{
        "href" : string,
        "items" : IAlbum[],
        "limit" : number,
        "next" : null,
        "offset" : number,
        "previous" : null,
        "total" : number
}

export interface IAlbum{
        "added_at" : string,
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
          "available_markets" : string[],
          "copyrights" : [ {
            "text" : string,
            "type" : string
          }, {
            "text" : string,
            "type" : string
          } ],
          "external_ids" : {
            "upc" : string
          },
          "external_urls" : {
            "spotify" : string
          },
          "genres" : [ ],
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
          "label" : string,
          "name" : string,
          "popularity" : number,
          "release_date" : string,
          "release_date_precision" : string,
          "total_tracks" : number,
          "tracks" : {
            "href" : string,
            "items" : ITrack[],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 11
          },
          "type" : "album",
          "uri" : "spotify:album:3ewRuYOSneUjBqbVQn45Jy"
        }
}

export interface ITrack{
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
    "available_markets" : string[],
    "disc_number" : number,
    "duration_ms" : number,
    "explicit" : boolean,
    "external_urls" : {
      "spotify" : string
    },
    "href" :string,
    "id" : string,
    "is_local" : boolean,
    "name" : string,
    "preview_url" : string,
    "track_number" : number,
    "type" : string,
    "uri" : string
  }