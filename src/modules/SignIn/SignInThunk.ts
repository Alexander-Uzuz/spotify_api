import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "api/signIn/signInRequest";

export const signInThunk = createAsyncThunk(
    'auth/signIn',
    async function(token:string | null,{rejectWithValue}){
        if(typeof token === 'string'){
            try{
                const response = await getData(token);
    
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