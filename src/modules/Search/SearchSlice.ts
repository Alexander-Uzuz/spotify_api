import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetSearch } from "./interfaces/IGetSearch";
import {IInitialState} from './interfaces/IInitialState';

import {getSearchThunk} from './SearchThunk';

const initialState:IInitialState ={
    searchData:null,
    error:null,
    loading:false,
}

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getSearchThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getSearchThunk .fulfilled, ((state,action:PayloadAction<IGetSearch>) => {
            state.searchData = action.payload;
        }))
        builder.addCase(getSearchThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.searchData = null;
            state.loading = false;
        })
    }
})

export const {} = searchSlice.actions;
export default searchSlice.reducer;
