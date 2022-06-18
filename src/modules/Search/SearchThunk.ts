import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData } from "api/search/searchRequest";

export const getSearchThunk = createAsyncThunk(
    'search/getSearch',
    async function(data:{token:any,searchValue:string},{rejectWithValue}){
        try{
            const response = await getSearchData(data);

            return response;
        }catch(err:any){
            return rejectWithValue(err.message)
        }
    }   
)