import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces/IPlaylist";
import { IGetPlaylistItems, IPlaylistItem } from "./interfaces/IGetPlayilstItems";
import {getPlaylistItemThunk} from './playlistThunk';

const initialState:IInitialState ={
    playlist:[],
    currentTrack:null,
    error:null,
    loading:false,
}

const playlistSlice = createSlice({
    name:'playlist',
    initialState,
    reducers:{
        prevTrack(state){
            const currentIndex = state.playlist.findIndex(item => item.track.id === state.currentTrack?.track.id);

            if(currentIndex === 0){
                state.currentTrack = state.playlist[state.playlist.length - 1];
            }else{
                state.currentTrack = state.playlist[currentIndex - 1]
            }
        },
        nextTrack(state){
            const currentIndex = state.playlist.findIndex(item => item.track.id === state.currentTrack?.track.id);

            if(currentIndex === state.playlist.length - 1){
                state.currentTrack = state.playlist[0];
            }else{
                state.currentTrack = state.playlist[currentIndex + 1]
            }
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getPlaylistItemThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getPlaylistItemThunk .fulfilled, ((state,action:PayloadAction<IGetPlaylistItems>) => {
            state.playlist = [...action.payload.items];
            state.currentTrack = action.payload.items[0];
            state.loading = false;
        }))
        builder.addCase(getPlaylistItemThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {prevTrack, nextTrack} = playlistSlice.actions;
export default playlistSlice.reducer;
