import { getPlaylistItem,getFollowArtistItem, getAlbumsItem  } from 'api/lib/libRequest';
import {getCategorysPlaylists} from 'api/search/searchRequest';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPlaylistsItemThunk = createAsyncThunk(
    'playlist/getPlaylistsItem',
    async function(data:{token:string | null,id:string}, {rejectWithValue}){
        if(typeof data.token === 'string'){
            try{
                const response = await getPlaylistItem(data);

                return response;

            }catch(err:any){
                return rejectWithValue(err.message);
            }
        }
    }
)

export const getArtistItemThunk = createAsyncThunk(
    'playlist/getArtistItem',
    async function(data:{token:string | null,id:string}, {rejectWithValue}){
        if(typeof data.token === 'string'){
            try{
                const response = await getFollowArtistItem(data);

                return response;

            }catch(err:any){
                return rejectWithValue(err.message);
            }
        }
    }
)

export const getAlbumItemThunk = createAsyncThunk(
    'playlist/getAlbumItem',
    async function(data:{token:string | null,id:string}, {rejectWithValue}){
        if(typeof data.token === 'string'){
            try{
                const response = await getAlbumsItem(data);

                return response;

            }catch(err:any){
                return rejectWithValue(err.message);
            }
        }
    }
)
