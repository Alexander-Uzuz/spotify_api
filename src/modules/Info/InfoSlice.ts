import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getPlaylistThunk, getArtistThunk, getArtistAlbumsThunk} from './InfoThunk';
import {IGetPlaylistInfo} from './interfaces/IGetPlaylist'
import { IGetArtist } from "./interfaces/IGetArtist";
import { IGetAlbums } from "./interfaces/IGetAlbums";
import { IInitialState } from "./interfaces/IInitialState";

const initialState:IInitialState = {
    title:'',
    subtitle:'',
    type:'',
    img:'',
    currentItemId:'',
    offset:0,
    total:0,
    albums:[],
    error:null,
    loading:false,
};


const infoSlice = createSlice({
    name:'info',
    initialState,
    reducers:{
        changeCurrentItem(state, action:PayloadAction<string>){
            state.currentItemId = action.payload;
        },
    },
    extraReducers:(builder) =>{

        builder.addCase(getPlaylistThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getArtistThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(getArtistAlbumsThunk .pending, (state => {
            state.error = null;
            state.loading = true;

        }))

        builder.addCase(getPlaylistThunk.fulfilled, ((state,action:PayloadAction<IGetPlaylistInfo>) => {
            state.loading = false;
            state.title = action.payload.name;
            state.subtitle = action.payload.description;
            state.img = action.payload.images[0].url;
        }))
        
        builder.addCase(getArtistThunk.fulfilled, ((state,action:PayloadAction<IGetArtist>) => {
            state.loading = false;
            state.title = action.payload.name;
            state.subtitle = `${action.payload.followers.total} подписчиков `;
            state.img = action.payload.images[0].url;
        }))
        builder.addCase(getArtistAlbumsThunk.fulfilled, ((state,action:PayloadAction<IGetAlbums>) => {
            state.total = action.payload.total;
            state.offset = state.offset + 6;
            state.albums = action.payload.items.map(item => {
                return {
                    id:item.id,
                    img:item.images[0].url,
                    name:item.name
                }
            })
        }))


        builder.addCase(getPlaylistThunk.rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        builder.addCase(getArtistThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        builder.addCase(getArtistAlbumsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

    }
})

export const {changeCurrentItem} = infoSlice.actions;
export default infoSlice.reducer