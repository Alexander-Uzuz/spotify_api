import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategorysPlaylists } from "api/search/searchRequest";

export const getCategorysPlaylistsThunk = createAsyncThunk(
    'search/getCategorysPlaylists',
    async function(data:{token:string, id:string, offset:number}, {rejectWithValue}){
            try{
                const response = await getCategorysPlaylists(data)

                return response;
            }catch(err:any){
                return rejectWithValue(err.message);
            }   
    }
)