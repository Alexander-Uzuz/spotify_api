import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces/IPlaylist";
import {getPlaylistsItemThunk, getArtistItemThunk, getAlbumItemThunk} from './playlistThunk';
import { getSearchThunk } from "modules/Search/SearchThunk";
import { IGetSearch } from "modules/Search/interfaces/IGetSearch";
import { setPending } from "common/helpers/helpersSlice";

const initialState:IInitialState ={
    playlist:[],
    currentTrack:null,
    error:null,
    loading:false,
    search:false,
    flag:''
}

const playlistSlice = createSlice({
    name:'playlist',
    initialState,
    reducers:{
        prevTrack(state){
            const currentIndex = state.playlist.findIndex((item:any) => item.id === state.currentTrack?.id);

            if(currentIndex === 0){
                state.currentTrack = state.playlist[state.playlist.length - 1];
            }else{
                state.currentTrack = state.playlist[currentIndex - 1]
            }
        },
        nextTrack(state){
            const currentIndex = state.playlist.findIndex((item:any) => item.id === state.currentTrack?.id);

            if(currentIndex === state.playlist.length - 1){
                state.currentTrack = state.playlist[0];
            }else{
                state.currentTrack = state.playlist[currentIndex + 1]
            }
        },
        addImgTrack(state, action:PayloadAction<string>){
            if(state.currentTrack){
                state.currentTrack.img =  action.payload;
            }
            state.playlist.map(item => item.img = action.payload);
        },
        playSongTable(state,action:PayloadAction<string>){
            const song = state.playlist.find(item => item.id === action.payload);

            if(song){
                state.currentTrack = song;
            }else{
                state.currentTrack = state.playlist[0];
            }
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getPlaylistsItemThunk .pending, setPending)
        builder.addCase(getArtistItemThunk .pending, setPending)
        builder.addCase(getAlbumItemThunk .pending, setPending)
        builder.addCase(getSearchThunk .pending, setPending)

        builder.addCase(getPlaylistsItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.search = false;
            const arr = action.payload.items.filter((item:any) => item.track?.preview_url);

            state.playlist = arr.map((item:any) => {
                return {
                    id:item.track.id ? item.track.id : '',
                    preview_url:item.track.preview_url,
                    songName:item.track.name,
                    artist:item.track.artists[0].name,
                    img:item.track.album.images[0].url
                }
            })  
            state.currentTrack = state.playlist[0];            
        })
        builder.addCase(getArtistItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.search = false;
            state.playlist = action.payload.tracks.map((item:any) => {
                return {
                    id:item.id,
                    preview_url:item.preview_url,
                    songName:item.name,
                    artist:item.artists[0].name,
                    img:item.album.images[0].url
                }
            })     
            state.currentTrack = state.playlist[0];      
        })
        builder.addCase(getAlbumItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.search = false;
            state.playlist = action.payload.items.map((item:any) => {
                return {
                    id:item.id,
                    songName:item.name,
                    artist:item.artists[0].name,
                    preview_url:item.preview_url,
                    img:null
                }
            })        
            state.currentTrack = state.playlist[0];    
        })
        builder.addCase(getSearchThunk .fulfilled, ((state,action:PayloadAction<IGetSearch>) => {
            state.search = true;
            state.playlist = action.payload.tracks.items.map(item => {
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


        builder.addCase(getPlaylistsItemThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        builder.addCase(getArtistItemThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        builder.addCase(getSearchThunk .rejected, (state, action:PayloadAction<any>) => {
            state.search = false;
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {prevTrack, nextTrack, addImgTrack,playSongTable } = playlistSlice.actions;
export default playlistSlice.reducer;
