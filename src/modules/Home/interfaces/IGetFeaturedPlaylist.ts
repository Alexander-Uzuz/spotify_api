export interface IGetFeaturedPlaylists{
    "message" : string,
    "playlists" : {
      "href" : string,
      "items" : IGetFeaturedPlaylist[],
      "limit" : number,
      "next" : string | null,
      "offset" : number,
      "previous" : string | null,
      "total" : number
    }
  }

export interface IGetFeaturedPlaylist {
    "collaborative" : boolean,
    "description" : string,
    "external_urls" : {
      "spotify" : string
    },
    "href" : string,
    "id" : string,
    "images" : [ {
      "height" : number | null | string,
      "url" : string,
      "width" : null | number | string,
    } ],
    "name" : string,
    "owner" : {
      "display_name" : string,
      "external_urls" : {
        "spotify" : string
      },
      "href" : string,
      "id" : string,
      "type" : string,
      "uri" : string
    },
    "primary_color" : string | null,
    "public" : null | string,
    "snapshot_id" : string,
    "tracks" : {
      "href" : string,
      "total" : number
    },
    "type" : string,
    "uri" : string
  }