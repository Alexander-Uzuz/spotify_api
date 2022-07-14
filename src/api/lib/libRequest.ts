import {get} from '../baseRequest';

export const getSavePlaylist = (token:string) => {
    return get('me/playlists', token)
}

export const getOnePlaylist = (data:{token:string, id:string}) => {
    return get(`playlists/${data.id}`, data.token)
}


export const getPlaylistItem = (data:{token:any, id:string, type?:string}) => {
    return get(`${data.type ? data.type : 'playlists'}/${data.id}/tracks`,data.token)
}

export const getFollowArtist = (token:string) =>{
    return get('me/following?type=artist&limit=10', token)
}

export const getFollowArtistItem = (data:{token:any, id:string}) =>{
    return get(`artists/${data.id}/top-tracks?market=ES`,data.token)
}

export const getAlbumsItem = (data:{token:any, id:string}) =>{
    return get(`albums/${data.id}/tracks`, data.token)
}

export const getSaveAlbums = (token:string) => {
    return get('me/albums',token);
}



// https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=1gCOYbJNUa1LBVO5rlx0jB&seed_genres=classical%2Ccountry%2Chip-hop&seed_tracks=5EhUWvS01AgP6lhWjcAv48&min_acousticness=0&max_acousticness=1&target_acousticness=1&min_danceability=0&max_danceability=1&target_danceability=1&min_duration_ms=0&max_duration_ms=1&target_duration_ms=300000&min_energy=0&max_energy=1&target_energy=1&min_instrumentalness=0&max_instrumentalness=1&target_instrumentalness=1&min_key=5&max_key=10&target_key=9&min_liveness=0&max_liveness=1&target_liveness=1&min_loudness=0&max_loudness=1&target_loudness=1&min_mode=0&max_mode=1&target_mode=1&min_popularity=10&max_popularity=99&target_popularity=60&min_speechiness=0&max_speechiness=1&target_speechiness=1&min_tempo=0&max_tempo=1&target_tempo=1&min_time_signature=0&max_time_signature=1&target_time_signature=1&min_valence=0&max_valence=1&target_valence=1

// {
//     "tracks": [],
//     "seeds": [
//       {
//         "initialPoolSize": 250,
//         "afterFilteringSize": 0,
//         "afterRelinkingSize": 0,
//         "id": "1gCOYbJNUa1LBVO5rlx0jB",
//         "type": "ARTIST",
//         "href": "https://api.spotify.com/v1/artists/1gCOYbJNUa1LBVO5rlx0jB"
//       },
//       {
//         "initialPoolSize": 256,
//         "afterFilteringSize": 0,
//         "afterRelinkingSize": 0,
//         "id": "5EhUWvS01AgP6lhWjcAv48",
//         "type": "TRACK",
//         "href": "https://api.spotify.com/v1/tracks/5EhUWvS01AgP6lhWjcAv48"
//       },
//       {
//         "initialPoolSize": 320,
//         "afterFilteringSize": 0,
//         "afterRelinkingSize": 0,
//         "id": "classical",
//         "type": "GENRE",
//         "href": null
//       },
//       {
//         "initialPoolSize": 317,
//         "afterFilteringSize": 0,
//         "afterRelinkingSize": 0,
//         "id": "country",
//         "type": "GENRE",
//         "href": null
//       },
//       {
//         "initialPoolSize": 304,
//         "afterFilteringSize": 0,
//         "afterRelinkingSize": 0,
//         "id": "hip-hop",
//         "type": "GENRE",
//         "href": null
//       }
//     ]
//   }