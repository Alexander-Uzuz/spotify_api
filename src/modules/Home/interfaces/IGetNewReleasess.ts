export interface IGetNewReleasess{
    "albums" : {
        "href" : string | null,
        "items" : INewReleases[],
        "limit" : number,
        "next" : string | null,
        "offset" : number,
        "previous" : string | null,
        "total" : number
      }
}

export interface INewReleases{
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
    "available_markets": string[],
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
}

interface IImage{
        "height" : number,
        "url" : string,
        "width" : number
}