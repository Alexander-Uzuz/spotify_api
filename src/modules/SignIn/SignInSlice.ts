import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {signInThunk} from './SignInThunk';
import { IInitialState, IActionMe} from "./interfaces/ISignIn";



const initialState:IInitialState = {
    signInCards:[],
    user:{
        username:null,
        id:null,
        avatarUrl:null
    },
    _error:null,
    loading:false,
};


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        removeUser(state){

        }
    },
    extraReducers:(builder) =>{
        builder.addCase(signInThunk .pending, state =>{
            state._error = null;
            state.loading = true;
        })
        builder.addCase(signInThunk .fulfilled, (state, action:PayloadAction<IActionMe>) =>{
            state.loading = false;
            state.user.username = action.payload.display_name;
            state.user.id = action.payload.id;
            state.user.avatarUrl = action.payload.images[0].url;
        })
        builder.addCase(signInThunk .rejected, (state, action:PayloadAction<any>) => {
            state._error = action.payload;
            state.loading = false;
            
        })
    }
})

export const {removeUser} = userSlice.actions;
export default userSlice.reducer