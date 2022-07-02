import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getCategorysPlaylistsThunk } from './GenreThunk';
import {IGetCategorysPlaylists} from './interface/IGetCategorysPlaylists';
import {IInitialState} from './interface/IInitialState'

const initialState:IInitialState ={
    playlistGenre:[],
    error:null,
    loading:false,
    currentItemId:'',
}

const genreSlice = createSlice({
    name:'genre',
    initialState,
    reducers:{
        changeCurrentItem(state, action:PayloadAction<string>){
            state.currentItemId = action.payload;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getCategorysPlaylistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
            state.playlistGenre = [];
        }))

        builder.addCase(getCategorysPlaylistsThunk .fulfilled, ((state, action:PayloadAction<IGetCategorysPlaylists>) => {
            state.playlistGenre = action.payload.playlists.items.map(item => {
                return {
                    description:item.description,
                    id:item.id,
                    name:item.name,
                    img:item.images[0].url
                }
            })
        }))

        builder.addCase(getCategorysPlaylistsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {changeCurrentItem} = genreSlice.actions;
export default genreSlice.reducer;
