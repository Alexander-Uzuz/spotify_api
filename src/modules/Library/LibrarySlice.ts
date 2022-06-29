import { IGetPlaylists } from './interfaces/IGetPlaylists';
import {IGetFollowingArtists} from './interfaces/IGetFollowingArtist';
import {IGetSaveAlbums} from './interfaces/IGetSaveAlbums';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getPlaylistsThunk, getFollowingArtistsThunk,getSaveAlbumsThunk} from './LibraryThunk';
import {IInitialState} from './interfaces/ILibrary';





const initialState:IInitialState = {
    playlist:[],
    flag:"playlists",
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
        builder.addCase(getFollowingArtistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getSaveAlbumsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))

        builder.addCase(getPlaylistsThunk .fulfilled, ((state,action:PayloadAction<IGetPlaylists>) => {
            state.flag = "playlists";
            state.playlist = action.payload.items.map((item:any) => {
                return {
                    id:item.id,
                    name:item.name,
                    img:item.images[0].url
                }
            })
            state.loading = false;
        }))
        builder.addCase(getFollowingArtistsThunk .fulfilled, ((state,action:PayloadAction<IGetFollowingArtists>) => {
            state.flag = "artists"
            state.playlist = action.payload.artists.items.map((item:any) => {
                return {
                    id:item.id,
                    name:item.name,
                    img:item.images[0].url ? item.images[0].url : null
                }
            })
            state.loading = false;
        }))
        builder.addCase(getSaveAlbumsThunk .fulfilled, ((state,action:PayloadAction<IGetSaveAlbums>) => {
            state.flag = "album"
            state.playlist = action.payload.items.map((item:any) => {
                return {
                    id:item.album.id,
                    name:item.album.name,
                    img:item.album.images[0].url
                }
            })
            state.loading = false;
        }))
        
        builder.addCase(getPlaylistsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        builder.addCase(getFollowingArtistsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        builder.addCase(getSaveAlbumsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {changeCurrentItem} = libSlice.actions;
export default libSlice.reducer