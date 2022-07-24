import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getPlaylistThunk} from './InfoThunk';
import {IGetPlaylistInfo} from './interfaces/IGetPlaylist'
import { IInitialState } from "./interfaces/IInitialState";

const initialState:IInitialState = {
    title:'',
    subtitle:'',
    type:'',
    img:'',
    error:null,
    loading:false,
};


const infoSlice = createSlice({
    name:'info',
    initialState,
    reducers:{
    },
    extraReducers:(builder) =>{

        builder.addCase(getPlaylistThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))

        builder.addCase(getPlaylistThunk.fulfilled, ((state,action:PayloadAction<IGetPlaylistInfo>) => {
            state.loading = false;
            state.title = action.payload.name;
            state.subtitle = action.payload.description;
            state.img = action.payload.images[0].url;
        }))

        builder.addCase(getPlaylistThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

    }
})

export const {} = infoSlice.actions;
export default infoSlice.reducer