import { createAsyncThunk } from "@reduxjs/toolkit";
import {getPlaylist} from 'api/lib/libRequest';

export const libThunk = createAsyncThunk(
    'lib/getLib',
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
)