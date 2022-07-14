import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFeaturedPlaylists} from "api/home/homeRequest";



export const getFeaturedPlaylistsThunk = createAsyncThunk(
    'home/getFeaturedPlaylists',
    async function(data:{token:string, offset:number},{rejectWithValue}){
        if(typeof data.token === 'string'){
            try{
                const response = await getFeaturedPlaylists(data);
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }
    }   
);



