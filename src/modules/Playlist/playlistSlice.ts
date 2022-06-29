import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces/IPlaylist";
import {getPlaylistsItemThunk, getArtistItemThunk, getAlbumItemThunk} from './playlistThunk';

const initialState:IInitialState ={
    playlist:[],
    currentTrack:null,
    error:null,
    loading:false,
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
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getPlaylistsItemThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getArtistItemThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getAlbumItemThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))


        builder.addCase(getPlaylistsItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.playlist = action.payload.items.map((item:any) => {
                return {
                    id:item.track.id,
                    preview_url:item.track.preview_url,
                    name:item.track.name,
                    artistName:item.track.artists[0].name,
                    img:item.track.album.images[0].url
                }
            })  
            state.currentTrack = state.playlist[0];            
        })
        builder.addCase(getArtistItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.playlist = action.payload.tracks.map((item:any) => {
                return {
                    id:item.id,
                    preview_url:item.preview_url,
                    name:item.name,
                    artistName:item.artists[0].name,
                    img:item.album.images[0].url
                }
            })     
            state.currentTrack = state.playlist[0];      
        })
        builder.addCase(getAlbumItemThunk .fulfilled, (state, action:PayloadAction<any>) => {
            state.playlist = action.payload.items.map((item:any) => {
                return {
                    id:item.id,
                    name:item.name,
                    artistName:item.artists[0].name,
                    preview_url:item.preview_url,
                    img:null
                }
            })        
            state.currentTrack = state.playlist[0];    
        })


        builder.addCase(getPlaylistsItemThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        builder.addCase(getArtistItemThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        builder.addCase(getAlbumItemThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {prevTrack, nextTrack, addImgTrack} = playlistSlice.actions;
export default playlistSlice.reducer;
