import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {getCategorysPlaylistsThunk } from './GenreThunk';
import {IGetCategorysPlaylists} from './interface/IGetCategorysPlaylists';
import {IInitialState} from './interface/IInitialState'

const initialState:IInitialState ={
    playlistGenre:[],
    error:null,
    loading:false,
    currentItemId:'',
    offset:0,
    total:0
}

const genreSlice = createSlice({
    name:'genre',
    initialState,
    reducers:{
        changeCurrentItem(state, action:PayloadAction<string>){
            state.currentItemId = action.payload;
        },
        clearPlaylist(state){
            state.playlistGenre = [];
            state.offset = 0;
            state.total = 0;
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getCategorysPlaylistsThunk .pending, (state => {
            state.error = null;
            state.loading = true;
            state.total = 0;
        }))

        builder.addCase(getCategorysPlaylistsThunk .fulfilled, ((state, action:PayloadAction<IGetCategorysPlaylists>) => {
                state.total = action.payload.playlists.total;
                state.offset = state.offset + 12;
                const playlist = action.payload.playlists.items.map(item => {
                    return {
                        description:item.description,
                        id:item.id,
                        name:item.name,
                        img:item.images[0].url
                    }
                })

                    state.playlistGenre = [
                        ...state.playlistGenre, 
                        ...playlist,                        
                    ];

    
                state.loading = false;
                console.log(state.playlistGenre.length)
        }))

        builder.addCase(getCategorysPlaylistsThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {changeCurrentItem,clearPlaylist} = genreSlice.actions;
export default genreSlice.reducer;
