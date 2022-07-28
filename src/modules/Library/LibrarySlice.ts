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
    offset:0,
    total:0,
};


const libSlice = createSlice({
    name:'lib',
    initialState,
    reducers:{
        changeCurrentItem(state, action:PayloadAction<string>){
            state.currentItemId = action.payload;
        },
        clearPlaylist(state){
            state.playlist = [];
            state.offset = 0;
            state.total = 0;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getPlaylistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
            state.total = 0;
            if(state.flag !== 'playlists'){
                state.offset = 0;
            }

        }))
        builder.addCase(getFollowingArtistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
            state.total = 0;
            if(state.flag !== 'artists'){
                state.offset = 0;
            }
        }))
        builder.addCase(getSaveAlbumsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
            state.total = 0;
            if(state.flag !== 'album'){
                state.offset = 0;
            }
        }))

        builder.addCase(getPlaylistsThunk .fulfilled, ((state,action:PayloadAction<IGetPlaylists>) => {
            state.total = action.payload.total;
            state.offset = state.offset + 12;
            state.flag = "playlists";
            state.playlist = action.payload.items.map((item:any) => {
                return {
                    id:item.id,
                    name:item.name,
                    img:item.images[0]?.url
                }
            })
            state.loading = false;
        }))
        builder.addCase(getFollowingArtistsThunk .fulfilled, ((state,action:PayloadAction<IGetFollowingArtists>) => {
            state.total = action.payload.artists.total;
            state.offset = state.offset + 12;
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
            state.total = action.payload.total;
            state.offset = state.offset + 12;
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

export const {changeCurrentItem,clearPlaylist} = libSlice.actions;
export default libSlice.reducer