import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IInitialState} from './interfaces/IInitialState';
import { IGetBrowseCategories } from "./interfaces/IGetBrowseCategories";
import {getBrowseCategoriesThunk } from './SearchThunk';

const initialState:IInitialState ={
    browseCategories:[],
    error:null,
    loading:false,
    offset:0,
    total:0,
}

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        clearPlaylist(state){
            state.browseCategories = [];
            state.offset = 0;
            state.total = 0;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getBrowseCategoriesThunk .pending, (state => {
            state.error = null;
            state.loading = true;
            state.total = 0;
        }))


        builder.addCase(getBrowseCategoriesThunk .fulfilled, ((state, action:PayloadAction<IGetBrowseCategories>) => {
            state.total = action.payload.categories.total;
            state.offset = state.offset + 12;
            state.browseCategories = action.payload.categories.items.map(item => {
                return {
                    img:item.icons[0].url,
                    id:item.id,
                    name:item.name
                }
            })
        }))

        builder.addCase(getBrowseCategoriesThunk .rejected, ((state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.browseCategories = [];
            state.loading = false;
        }))
    }
})

export const {clearPlaylist} = searchSlice.actions;
export default searchSlice.reducer;
