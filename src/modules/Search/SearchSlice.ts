import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetSearch } from "./interfaces/IGetSearch";
import {IInitialState} from './interfaces/IInitialState';
import { IGetBrowseCategories } from "./interfaces/IGetBrowseCategories";
import {getSearchThunk, getBrowseCategoriesThunk } from './SearchThunk';

const initialState:IInitialState ={
    searchData:[],
    browseCategories:[],
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
        builder.addCase(getBrowseCategoriesThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        // builder.addCase(getCategorysPlaylistsThunk .pending, (state => {
        //     state.error = null;
        //     state.loading = true;
        // }))


        builder.addCase(getSearchThunk .fulfilled, ((state,action:PayloadAction<IGetSearch>) => {
            state.searchData = action.payload.tracks.items.map(item => {
                return {
                    id:item.id,
                    preview_url:item.preview_url,
                    songName:item.name,
                    albumName:item.album.name,
                    artist:item.artists[0].name,
                    img:item.album.images[2].url,
                }
            })            
        }))
        builder.addCase(getBrowseCategoriesThunk .fulfilled, ((state, action:PayloadAction<IGetBrowseCategories>) => {
            state.browseCategories = action.payload.categories.items.map(item => {
                return {
                    img:item.icons[0].url,
                    id:item.id,
                    name:item.name
                }
            })
        }))
        // builder.addCase(getCategorysPlaylistsThunk .fulfilled, ((state, action:PayloadAction<any>) => {
        //     console.log(action.payload, 'payload')
        // }))


        builder.addCase(getSearchThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.searchData = [];
            state.loading = false;
        })
        builder.addCase(getBrowseCategoriesThunk .rejected, ((state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.browseCategories = [];
            state.loading = false;
        }))
        // builder.addCase(getCategorysPlaylistsThunk .rejected, (state, action:PayloadAction<any>) => {
        //     state.error = action.payload;
        //     state.loading = false;
        // })
    }
})

export const {} = searchSlice.actions;
export default searchSlice.reducer;
