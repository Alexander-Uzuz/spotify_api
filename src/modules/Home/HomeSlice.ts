import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getFeaturedPlaylistsThunk } from "./HomeThunk";
import { IInitialState } from "./interfaces/IInitialState";
import { IGetFeaturedPlaylists } from "./interfaces/IGetFeaturedPlaylist";

const initialState:IInitialState = {
    featuredPlaylist:[],
    currentItemId:'',
    error:null,
    loading:false,
    offset:0,
    total:0
};


const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{
        changeCurrentItem(state, action:PayloadAction<string>){
            state.currentItemId = action.payload;
        },
        clearPlaylist(state){
            state.featuredPlaylist = [];
            state.offset = 0;
            state.total = 0;
        }
    },
    extraReducers:(builder) =>{

        builder.addCase(getFeaturedPlaylistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
            state.total = 0;
        }))

        builder.addCase(getFeaturedPlaylistsThunk.fulfilled, ((state,action:PayloadAction<IGetFeaturedPlaylists>) => {
            state.total = action.payload?.playlists?.total;
            state.offset = state.offset + 8;
            const newFeaturedPlaylist = action.payload?.playlists?.items?.map(playlist => {
                return {
                    id:playlist.id,
                    name:playlist.name,
                    img:playlist.images[0].url,
                    description:playlist.description
                }
            })

            state.featuredPlaylist = [
                ...state.featuredPlaylist,
                ...newFeaturedPlaylist
            ]
            state.loading = false;
        }))

        builder.addCase(getFeaturedPlaylistsThunk .rejected, (state, action:PayloadAction<any>) => {
            console.log('hi hi')
            state.error = action.payload;
            state.loading = false;
        })

    }
})

export const {changeCurrentItem,clearPlaylist} = homeSlice.actions;
export default homeSlice.reducer