import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const preloadedState:any = {
    playlist:{
        playlist:[{
          "added_at" : "2022-05-28T11:19:50Z",
          "added_by" : {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/user/31yoambgjrlz5ti23krl5guqvufa"
            },
            "href" : "https://api.spotify.com/v1/users/31yoambgjrlz5ti23krl5guqvufa",
            "id" : "31yoambgjrlz5ti23krl5guqvufa",
            "type" : "user",
            "uri" : "spotify:user:31yoambgjrlz5ti23krl5guqvufa"
          },
          "is_local" : false,
          "primary_color" : null,
          "track" : {
            "album" : {
              "album_type" : "album",
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB"
                },
                "href" : "https://api.spotify.com/v1/artists/1gCOYbJNUa1LBVO5rlx0jB",
                "id" : "1gCOYbJNUa1LBVO5rlx0jB",
                "name" : "Oxxxymiron",
                "type" : "artist",
                "uri" : "spotify:artist:1gCOYbJNUa1LBVO5rlx0jB"
              } ],
              "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
              "external_urls" : {
                "spotify" : "https://open.spotify.com/album/37GqOfeuzBtpj32ZG28SqH"
              },
              "href" : "https://api.spotify.com/v1/albums/37GqOfeuzBtpj32ZG28SqH",
              "id" : "37GqOfeuzBtpj32ZG28SqH",
              "images" : [ {
                "height" : 640,
                "url" : "https://i.scdn.co/image/ab67616d0000b27337e20117135cd36cca2fccb9",
                "width" : 640
              }, {
                "height" : 300,
                "url" : "https://i.scdn.co/image/ab67616d00001e0237e20117135cd36cca2fccb9",
                "width" : 300
              }, {
                "height" : 64,
                "url" : "https://i.scdn.co/image/ab67616d0000485137e20117135cd36cca2fccb9",
                "width" : 64
              } ],
              "name" : "Красота и Уродство",
              "release_date" : "2021-12-01",
              "release_date_precision" : "day",
              "total_tracks" : 22,
              "type" : "album",
              "uri" : "spotify:album:37GqOfeuzBtpj32ZG28SqH"
            },
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB"
              },
              "href" : "https://api.spotify.com/v1/artists/1gCOYbJNUa1LBVO5rlx0jB",
              "id" : "1gCOYbJNUa1LBVO5rlx0jB",
              "name" : "Oxxxymiron",
              "type" : "artist",
              "uri" : "spotify:artist:1gCOYbJNUa1LBVO5rlx0jB"
            } ],
            "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
            "disc_number" : 1,
            "duration_ms" : 166160,
            "episode" : false,
            "explicit" : true,
            "external_ids" : {
              "isrc" : "QMDA72177286"
            },
            "external_urls" : {
              "spotify" : "https://open.spotify.com/track/0zBQznV5QeLsqPz5sgU2hq"
            },
            "href" : "https://api.spotify.com/v1/tracks/0zBQznV5QeLsqPz5sgU2hq",
            "id" : "0zBQznV5QeLsqPz5sgU2hq",
            "is_local" : false,
            "name" : "Мы все умрем",
            "popularity" : 51,
            "preview_url" : "https://p.scdn.co/mp3-preview/45af2d275a1c0ddf6b56108acb0a6ee2b68add96?cid=9309a5a8d84f49fb91991600cca1d8ed",
            "track" : true,
            "track_number" : 6,
            "type" : "track",
            "uri" : "spotify:track:0zBQznV5QeLsqPz5sgU2hq"
          },
          "video_thumbnail" : {
            "url" : null
          }
        }],
        currentTrack:{
            "added_at" : "2022-05-28T11:19:50Z",
            "added_by" : {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/user/31yoambgjrlz5ti23krl5guqvufa"
              },
              "href" : "https://api.spotify.com/v1/users/31yoambgjrlz5ti23krl5guqvufa",
              "id" : "31yoambgjrlz5ti23krl5guqvufa",
              "type" : "user",
              "uri" : "spotify:user:31yoambgjrlz5ti23krl5guqvufa"
            },
            "is_local" : false,
            "primary_color" : null,
            "track" : {
              "album" : {
                "album_type" : "album",
                "artists" : [ {
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB"
                  },
                  "href" : "https://api.spotify.com/v1/artists/1gCOYbJNUa1LBVO5rlx0jB",
                  "id" : "1gCOYbJNUa1LBVO5rlx0jB",
                  "name" : "Oxxxymiron",
                  "type" : "artist",
                  "uri" : "spotify:artist:1gCOYbJNUa1LBVO5rlx0jB"
                } ],
                "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/album/37GqOfeuzBtpj32ZG28SqH"
                },
                "href" : "https://api.spotify.com/v1/albums/37GqOfeuzBtpj32ZG28SqH",
                "id" : "37GqOfeuzBtpj32ZG28SqH",
                "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab67616d0000b27337e20117135cd36cca2fccb9",
                  "width" : 640
                }, {
                  "height" : 300,
                  "url" : "https://i.scdn.co/image/ab67616d00001e0237e20117135cd36cca2fccb9",
                  "width" : 300
                }, {
                  "height" : 64,
                  "url" : "https://i.scdn.co/image/ab67616d0000485137e20117135cd36cca2fccb9",
                  "width" : 64
                } ],
                "name" : "Красота и Уродство",
                "release_date" : "2021-12-01",
                "release_date_precision" : "day",
                "total_tracks" : 22,
                "type" : "album",
                "uri" : "spotify:album:37GqOfeuzBtpj32ZG28SqH"
              },
              "artists" : [ {
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/1gCOYbJNUa1LBVO5rlx0jB"
                },
                "href" : "https://api.spotify.com/v1/artists/1gCOYbJNUa1LBVO5rlx0jB",
                "id" : "1gCOYbJNUa1LBVO5rlx0jB",
                "name" : "Oxxxymiron",
                "type" : "artist",
                "uri" : "spotify:artist:1gCOYbJNUa1LBVO5rlx0jB"
              } ],
              "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
              "disc_number" : 1,
              "duration_ms" : 166160,
              "episode" : false,
              "explicit" : true,
              "external_ids" : {
                "isrc" : "QMDA72177286"
              },
              "external_urls" : {
                "spotify" : "https://open.spotify.com/track/0zBQznV5QeLsqPz5sgU2hq"
              },
              "href" : "https://api.spotify.com/v1/tracks/0zBQznV5QeLsqPz5sgU2hq",
              "id" : "0zBQznV5QeLsqPz5sgU2hq",
              "is_local" : false,
              "name" : "Мы все умрем",
              "popularity" : 51,
              "preview_url" : "https://p.scdn.co/mp3-preview/45af2d275a1c0ddf6b56108acb0a6ee2b68add96?cid=9309a5a8d84f49fb91991600cca1d8ed",
              "track" : true,
              "track_number" : 6,
              "type" : "track",
              "uri" : "spotify:track:0zBQznV5QeLsqPz5sgU2hq"
            },
            "video_thumbnail" : {
              "url" : null
            }
          }
    }
}

export const store = configureStore({
    reducer:rootReducer,
    preloadedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;