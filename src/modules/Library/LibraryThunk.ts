import { createAsyncThunk } from "@reduxjs/toolkit";
import {getPlaylist, getFollowArtist} from 'api/lib/libRequest';

export const getPlaylistsThunk = createAsyncThunk(
    'lib/getPlaylists',
    async function(token:string | null,{rejectWithValue}){
        if(typeof token === 'string'){
            try{
                const response = await getPlaylist(token);
    
                if(response.status === 401){
                    return rejectWithValue(response.message)
                }
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
            }
        }    
);

export const getFollowingArtistsThunk = createAsyncThunk(
    'lib/getFollowingArtists',
    async function(token:string | null, {rejectWithValue}){
        if(typeof token === 'string'){
            try{
                const response = await getFollowArtist(token);

                if(response.status === 401){
                    return rejectWithValue(response.message)
                }

                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }
    }
)

