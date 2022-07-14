import {get} from '../baseRequest';

export const getRecommendation = (token:string) => {
    return get('recommendations?limit=10&market=ES&seed_artists=1gCOYbJNUa1LBVO5rlx0jB&seed_genres=classical%2Ccountry%2Chip-hop&seed_tracks=5EhUWvS01AgP6lhWjcAv48&min_acousticness=0&max_acousticness=1&target_acousticness=1&min_danceability=0&max_danceability=1&target_danceability=1&min_duration_ms=0&max_duration_ms=1&target_duration_ms=300000&min_energy=0&max_energy=1&target_energy=1&min_instrumentalness=0&max_instrumentalness=1&target_instrumentalness=1&min_key=5&max_key=10&target_key=9&min_liveness=0&max_liveness=1&target_liveness=1&min_loudness=0&max_loudness=1&target_loudness=1&min_mode=0&max_mode=1&target_mode=1&min_popularity=10&max_popularity=99&target_popularity=60&min_speechiness=0&max_speechiness=1&target_speechiness=1&min_tempo=0&max_tempo=1&target_tempo=1&min_time_signature=0&max_time_signature=1&target_time_signature=1&min_valence=0&max_valence=1&target_valence=1', token)
}

export const getRecommendationArtists = (data:{href:string, token:string}) => {
    return get(data.href,data.token)
}

export const getFeaturedPlaylists = (data:{token:string, offset:number}) => {
    return get(`browse/featured-playlists?country=SE&locale=sv_SE&timestamp=2014-10-23T09%3A00%3A00.000Z&limit=8&offset=${data.offset}`, data.token);
}


