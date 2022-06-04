import { IGetPlaylists } from './interfaces/IGetPlaylists';
import {IGetFollowingArtists} from './interfaces/IGetFollowingArtist';
import {IGetSaveAlbums} from './interfaces/IGetSaveAlbums';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getPlaylistsThunk, getFollowingArtistsThunk,getSaveAlbumsThunk} from './LibraryThunk';
import {IInitialState} from './interfaces/ILibrary';





const initialState:IInitialState = {
    playlists:[],
    artists:[],
    albums:[],
    currentItemId:'',
    error:null,
    loading:false,
};


const libSlice = createSlice({
    name:'lib',
    initialState,
    reducers:{
        changeCurrentItem(state, action:PayloadAction<string>){
            state.currentItemId = action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getPlaylistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getPlaylistsThunk .fulfilled, ((state,action:PayloadAction<IGetPlaylists>) => {
            state.playlists = [...action.payload.items]
            state.loading = false;
        }))
        builder.addCase(getPlaylistsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        builder.addCase(getFollowingArtistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getFollowingArtistsThunk .fulfilled, ((state,action:PayloadAction<IGetFollowingArtists>) => {
            state.artists = [...action.payload.artists.items]
            state.loading = false;
        }))
        builder.addCase(getFollowingArtistsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        builder.addCase(getSaveAlbumsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getSaveAlbumsThunk .fulfilled, ((state,action:PayloadAction<IGetSaveAlbums>) => {
            state.albums = [...action.payload.items];
            state.loading = false;
        }))
        builder.addCase(getSaveAlbumsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {changeCurrentItem} = libSlice.actions;
export default libSlice.reducer