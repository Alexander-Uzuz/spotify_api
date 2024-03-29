import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getPlaylistThunk, getArtistThunk, getArtistAlbumsThunk, getAlbumThunk} from './InfoThunk';
import {checkFollowPlaylistThunk} from './FollowPlaylistThunk';
import { checkFollowArtistThunk } from "./FollowArtistThunk";
import {IGetPlaylistInfo} from './interfaces/IGetPlaylist'
import { IGetArtist } from "./interfaces/IGetArtist";
import { IGetAlbums } from "./interfaces/IGetAlbums";
import { IGetAlbum } from "./interfaces/IGetAlbum";
import { IInitialState } from "./interfaces/IInitialState";

const initialState:IInitialState = {
    title:'',
    subtitle:'',
    type:'',
    img:'',
    currentItemId:'',
    offset:0,
    total:0,
    artistId:'',
    checkFollow:false,
    albumId:'',
    albums:[],
    error:null,
    loading:false,
};

const setPending = (state:IInitialState) => {
    state.error = null;
    state.loading = true;
}

const setRejected = (state:IInitialState, action:PayloadAction<any>) =>{
    state.error = action.payload;
    state.loading = false;
}


const infoSlice = createSlice({
    name:'info',
    initialState,
    reducers:{
        changeCurrentItem(state, action:PayloadAction<string>){
            state.currentItemId = action.payload;
        },
        switchFollowing(state){
            state.checkFollow = !state.checkFollow;
        }
    },
    extraReducers:(builder) =>{

        builder.addCase(getPlaylistThunk .pending, setPending)
        builder.addCase(getArtistThunk .pending, setPending)
        builder.addCase(getArtistAlbumsThunk .pending, setPending)
        builder.addCase(getAlbumThunk .pending, setPending)
        builder.addCase(checkFollowPlaylistThunk .pending, setPending)
        builder.addCase(checkFollowArtistThunk .pending, setPending)

        builder.addCase(checkFollowPlaylistThunk .fulfilled, (state,action:PayloadAction<boolean[]>) => {
            state.loading = false;
            state.checkFollow = action.payload[0]            
        })
        builder.addCase(checkFollowArtistThunk .fulfilled, (state,action:PayloadAction<boolean[]>) => {
            state.loading = false;
            state.checkFollow = action.payload[0]            
        })
        builder.addCase(getAlbumThunk.fulfilled, ((state,action:PayloadAction<IGetAlbum>) => {
            state.albumId = action.payload.id;
            state.artistId = action.payload.artists[0].id;
            state.title = action.payload.name;
            state.subtitle = `${action.payload.artists[0].name} - ${action.payload.name} - ${action.payload.release_date.slice(0,4)} - ${action.payload.total_tracks} треков`
            state.img = action.payload.images[0].url;
            state.loading = false;
        }))
        builder.addCase(getPlaylistThunk.fulfilled, ((state,action:PayloadAction<IGetPlaylistInfo>) => {
            state.title = action.payload.name;
            state.subtitle = action.payload.description;
            state.img = action.payload.images[0].url;
            state.loading = false;
        }))
        
        builder.addCase(getArtistThunk.fulfilled, ((state,action:PayloadAction<IGetArtist>) => {
            state.title = action.payload.name;
            state.subtitle = `${action.payload.followers.total} подписчиков `;
            state.img = action.payload.images[0].url;
            state.loading = false;
        }))
        builder.addCase(getArtistAlbumsThunk.fulfilled, ((state,action:PayloadAction<IGetAlbums>) => {
            state.total = action.payload.total;
            state.albums = action.payload.items.map(item => {
                return {
                    id:item.id,
                    img:item.images[0].url,
                    name:item.name
                }
            }).filter(item => item.id !== state.albumId)
            state.loading = false;
        }))


        builder.addCase(getPlaylistThunk.rejected, setRejected)
        builder.addCase(getArtistThunk .rejected, setRejected)
        builder.addCase(getArtistAlbumsThunk .rejected, setRejected)
        builder.addCase(checkFollowPlaylistThunk .rejected, setRejected)
        builder.addCase(checkFollowArtistThunk .rejected, setRejected)
    }
})

export const {changeCurrentItem,switchFollowing} = infoSlice.actions;
export default infoSlice.reducer