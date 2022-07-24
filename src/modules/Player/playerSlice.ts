import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces/IPlayer";
import {getPlaylistsItemThunk, getArtistItemThunk, getAlbumItemThunk} from './playerThunk';
import { getSearchThunk } from "modules/Search/SearchThunk";
import { IGetSearch } from "modules/Search/interfaces/IGetSearch";

const initialState:IInitialState ={
    player:[],
    currentTrack:null,
    error:null,
    loading:false,
    search:false,
    flag:''
}

const playerSlice = createSlice({
    name:'player',
    initialState,
    reducers:{
        prevTrack(state){
            const currentIndex = state.player.findIndex((item:any) => item.id === state.currentTrack?.id);

            if(currentIndex === 0){
                state.currentTrack = state.player[state.player.length - 1];
            }else{
                state.currentTrack = state.player[currentIndex - 1]
            }
        },
        nextTrack(state){
            const currentIndex = state.player.findIndex((item:any) => item.id === state.currentTrack?.id);

            if(currentIndex === state.player.length - 1){
                state.currentTrack = state.player[0];
            }else{
                state.currentTrack = state.player[currentIndex + 1]
            }
        },
        addImgTrack(state, action:PayloadAction<string>){
            if(state.currentTrack){
                state.currentTrack.img =  action.payload;
            }
            state.player.map(item => item.img = action.payload);
        },
        playSongTable(state,action:PayloadAction<string>){
            const song = state.player.find(item => item.id === action.payload);

            if(song){
                state.currentTrack = song;
            }else{
                state.currentTrack = state.player[0];
            }
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getPlaylistsItemThunk .pending, (state) => {
            state.error = null;
            state.loading = false;
        })
        builder.addCase(getArtistItemThunk .pending, (state) => {
            state.error = null;
            state.loading = false;
        })
        builder.addCase(getAlbumItemThunk .pending, (state) => {
            state.error = null;
            state.loading = false;
        })
        builder.addCase(getSearchThunk .pending, (state) => {
            state.error = null;
            state.loading = false;
        })

        builder.addCase(getPlaylistsItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.search = false;
            const arr = action.payload.items.filter((item:any) => item.track?.preview_url);

            state.player = arr.map((item:any) => {
                return {
                    id:item.track.id ? item.track.id : '',
                    preview_url:item.track.preview_url,
                    songName:item.track.name,
                    artist:item.track.artists[0].name,
                    img:item.track.album.images[0].url
                }
            })  
            state.currentTrack = state.player[0];            
        })
        builder.addCase(getArtistItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.search = false;
            state.player = action.payload.tracks.map((item:any) => {
                return {
                    id:item.id,
                    preview_url:item.preview_url,
                    songName:item.name,
                    artist:item.artists[0].name,
                    img:item.album.images[0].url
                }
            })     
            state.currentTrack = state.player[0];      
        })
        builder.addCase(getAlbumItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.search = false;
            state.player = action.payload.items.map((item:any) => {
                return {
                    id:item.id,
                    songName:item.name,
                    artist:item.artists[0].name,
                    preview_url:item.preview_url,
                    img:null
                }
            })        
            state.currentTrack = state.player[0];    
        })
        builder.addCase(getSearchThunk .fulfilled, ((state,action:PayloadAction<IGetSearch>) => {
            state.search = true;
            state.player = action.payload.tracks.items.map(item => {
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

export const {prevTrack, nextTrack, addImgTrack,playSongTable } = playerSlice.actions;
export default playerSlice.reducer;
