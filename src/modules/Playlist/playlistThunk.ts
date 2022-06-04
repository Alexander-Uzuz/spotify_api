import { getPlaylistItem } from './../../api/playlist/playlist';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getPlaylistItemThunk = createAsyncThunk(
    'playlist/getPlaylistItem',
    async function(data:{token:string | null,id:string}, {rejectWithValue}){
        if(typeof data.token === 'string'){
            try{
                const response = await getPlaylistItem(data);
    
                if(response.status === 401){
                    return rejectWithValue(response.message)
                }
        
                return response;
            }catch(err:any){
                return rejectWithValue(err.message);
            }
        }
    }
)