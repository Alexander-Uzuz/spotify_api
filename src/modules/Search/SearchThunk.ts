import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData, getBrowseCategories } from "api/search/searchRequest";

export const getSearchThunk = createAsyncThunk(
    'search/getSearch',
    async function(data:{token:any,searchValue:string},{rejectWithValue}){
        if(typeof data.token === 'string'){
            try{
                const response = await getSearchData(data);
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }
    }   
);

export const getBrowseCategoriesThunk = createAsyncThunk(
    'search/getBrowseCategories',
    async function(token:string | null,{rejectWithValue}){
        if(typeof token === 'string'){
            try{
                const response = await getBrowseCategories(token);
    
                return response;
            }catch(err:any){
                return rejectWithValue(err.message)
            }
        }
    }
)
