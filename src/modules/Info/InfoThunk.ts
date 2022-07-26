import { createAsyncThunk } from "@reduxjs/toolkit";
import {getPlaylist, getArtist, getArtistAlbums, getTopTracksArtist} from "api/info/infoRequest";
import { getAlbumsItem } from "api/lib/libRequest";

export const getArtistAlbumsThunk = createAsyncThunk(
    'info/getArtistAlbums',
    async function(data:{token:string, id:string, offset:number},{rejectWithValue}){
            try{
                const response = await getArtistAlbums(data);
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }  
);

export const getArtistAlbumItemThunk = createAsyncThunk(
    'lib/getArtistAlbumItem',
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

export const getPlaylistThunk = createAsyncThunk(
    'info/getPlaylist',
    async function(data:{token:string, id:string},{rejectWithValue}){
            try{
                const response = await getPlaylist(data);
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }  
);

export const getArtistThunk = createAsyncThunk(
    'info/getArtist',
    async function(data:{token:string, id:string},{rejectWithValue}){
            try{
                const response = await getArtist(data);
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }  
);

export const getTopTracksArtistThunk = createAsyncThunk(
    'info/getTopTracksArtist',
    async function(data:{token:string, id:string},{rejectWithValue}){
            try{
                const response = await getTopTracksArtist(data);
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }  
);


