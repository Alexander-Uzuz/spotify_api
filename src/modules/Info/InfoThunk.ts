import { createAsyncThunk } from "@reduxjs/toolkit";
import {getPlaylist} from "api/info/infoRequest";



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