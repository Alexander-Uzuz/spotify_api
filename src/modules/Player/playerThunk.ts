import { getPlaylistItem,getFollowArtistItem, getAlbumsItem  } from 'api/lib/libRequest';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPlaylistsItemThunk = createAsyncThunk(
    'player/getPlaylistsItem',
    async function(data:{token:string | null,id:string, type?:string}, {rejectWithValue}){
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
    'player/getArtistItem',
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
    'player/getAlbumItem',
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
