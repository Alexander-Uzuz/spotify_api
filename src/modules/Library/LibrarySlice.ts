import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {libThunk} from './LibraryThunk';
import {IInitialState,IGetLib} from './interfaces/ILibrary';





const initialState:IInitialState = {
    playlists:[],
    error:null,
    loading:false,
};


const libSlice = createSlice({
    name:'lib',
    initialState,
    reducers:{
    },
    extraReducers:(builder) =>{
        builder.addCase(libThunk .pending, (state => {
            state.error = null;
            state.loading = true;
        }))
        builder.addCase(libThunk .fulfilled, ((state,action:PayloadAction<IGetLib>) => {
            state.playlists = [...action.payload.items]
            state.loading = false;
        }))
        builder.addCase(libThunk .rejected, (state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {} = libSlice.actions;
export default libSlice.reducer